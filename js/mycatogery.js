let buttonNav = document.querySelector("span");

buttonNav.addEventListener("click", function () {
  let x = document.getElementById("mySidenav");
  if (x.style.left === "0px") {
    x.style.left = "-170px";
  } else {
    x.style.left = "0px";
  }
});

async function myCatogery() {
  let myCat = localStorage.getItem("catName");
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${myCat}`
  );
  let finalRes = await res.json();
  console.log(finalRes);
  display(finalRes);
}

myCatogery();

function display(data) {
  let list = data.meals;
  var cartona = "";
  for (var i = 0; i < list.length; i++) {
    cartona += ` <div class="col-3">
            <div class="img-dish">
              <img src="${list[i].strMealThumb}" class="w-100" alt="" />
              <div  class="img-caption d-flex justify-content-center align-items-center" >
                <span class="fs-3 fw-3">${list[i].strMeal}</span>
              </div>
            </div>
          </div>`;
  }
  document.querySelector("#myCatogery").innerHTML = cartona;
}
