

document.querySelector("#searchByName").addEventListener("keyup", searchByName);

async function searchByName() {
  let serachName = document.querySelector("#searchByName").value;
  // console.log(serachName);
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachName}`
  );
  let finalRes = await res.json();
  display(finalRes);

  console.log(finalRes);
}

document
  .querySelector("#searchByLetter")
  .addEventListener("keyup", searchByLetter);

async function searchByLetter() {
  let serachName = document.querySelector("#searchByLetter").value;
  // console.log(serachName);
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${serachName}`
  );
  let finalRes = await res.json();
  display(finalRes);
  console.log(finalRes);
}

function display(data) {
  let list = data.meals;
  cartona = "";
  for (var i = 0; i < list.length; i++) {
    cartona += ` <div class="col-3">
            <div class="">
              <div class="img-search">
                <img src="${list[i].strMealThumb}/preview" class="w-100" alt="" />
              </div>
              <div class="img-caption">
                <span>${list[i].strMeal}</span>
              </div>
            </div>
          </div>`;
  }
  document.querySelector("#searhData").innerHTML = cartona;
}
