let buttonNav = document.querySelector("span");

buttonNav.addEventListener("click", function () {
  let x = document.getElementById("mySidenav");
  if (x.style.left === "0px") {
    x.style.left = "-170px";
  } else {
    x.style.left = "0px";
  }
});

async function getData() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let finalRes = await res.json();
  display(finalRes);
}

getData();

function display(data) {
  let list = data.meals;

  var cartona = "";

  for (let i = 0; i < list.length; i++) {
    cartona += `<div class="col-3">
            <div class="img-dish">
              <img src="${list[i].strMealThumb}/preview" class="w-100" alt="" />
              <div code-meal="${list[i].idMeal}" class="img-caption img-caption d-flex justify-content-center align-items-center" >
                <span class="fs-2">${list[i].strMeal}</span>
              </div>
            </div>
          </div>`;
  }
  document.querySelector("#random-dishes").innerHTML = cartona;

  let myDish = document.querySelectorAll(".img-dish");
  // console.log(myDish);
  for (let i = 0; i < myDish.length; i++) {
    myDish[i].addEventListener("click", function (e) {
      console.log(e.target.getAttribute("code-meal"));
      localStorage.setItem("mealId", e.target.getAttribute("code-meal"));

      // console.log(ay7aga);
      window.open("http://127.0.0.1:5500/dishpage.html", "_self");
    });
  }
}
