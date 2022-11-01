let buttonNav = document.querySelector("span");

buttonNav.addEventListener("click", function () {
  let x = document.getElementById("mySidenav");
  if (x.style.left === "0px") {
    x.style.left = "-170px";
  } else {
    x.style.left = "0px";
  }
});

async function getMeal() {
  let mealId = localStorage.getItem("mealId");
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  let finalRes = await res.json();
  console.log(finalRes);
  display(finalRes);
}

getMeal();

function display(data) {
  let meal = data.meals[0];

  var cartona = "";
  cartona += `   <div class="col-4">
          <div class="img-dish">
            <img src="${meal.strMealThumb}/preview" class="w-100" alt="" />
          </div>
        </div>

        <div class="col-8">
          <div class="div text-white">
            <h2>Instructions</h2>
            <p>${meal.strInstructions}</p>
            <p>${meal.strArea}</p>
            <p>${meal.strCategory}</p>
            <div class="whatsin">
              <p>Recipes :</p>
              <div class="d-flex justify-content-around text-black">
              `;
  for (var i = 0; i < 20; i++) {
    cartona += `
    <p class="bg-white me-3"> ${meal[`strMeasure${i + 1}`]}  
    ${meal[`strIngredient${i + 1}`]} </p>`;
  }

  cartona += `
  </div>
  </div>
</div>
</div>
 <div class="tags">
              <h3>Tags :</h3>
              <span>soup</span>
              <div class="buttons">
                <a class="btn btn-success text-white" target="_blank"  href="${meal.strSource}">source</a>
                <a class="btn btn-danger text-white" target="_blank" href="${meal.strYoutube}">YouTube</a>
              </div>
            </div>
          </div>
        </div>`;

  document.querySelector("#mydish").innerHTML = cartona;
}
