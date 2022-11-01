let buttonNav = document.querySelector("span");

buttonNav.addEventListener("click", function () {
  let x = document.getElementById("mySidenav");
  if (x.style.left === "0px") {
    x.style.left = "-170px";
  } else {
    x.style.left = "0px";
  }
});

async function getCatogeries() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let finalRes = await res.json();
  console.log(finalRes);
  display(finalRes);
}

getCatogeries();

function display(data) {
  let list = data.categories;

  var cartona = "";

  for (let i = 0; i < list.length; i++) {
    cartona += ` <div class="col-3 mycat">
          <div class="img-dish">
            <img src="${list[i].strCategoryThumb}" class="w-100" alt="" />
            <div class="img-caption text-center">
              <h3 code-catogery="${list[i].strCategory}" class="fs-3">${list[i].strCategory}</h3>
              <p code-catogery="${list[i].strCategory}" class="">${list[i].strCategoryDescription}</p>
            </div>
          </div>
        </div>`;
  }
  document.querySelector("#mycatogeries").innerHTML = cartona;

  let mycatogery = document.querySelectorAll(".img-dish");
  for (let i = 0; i < mycatogery.length; i++) {
    mycatogery[i].addEventListener("click", function (e) {
      console.log(e.target.getAttribute("code-catogery"));
      localStorage.setItem("catName", e.target.getAttribute("code-catogery"));
      window.open("http://127.0.0.1:5500/mycatogery.html", "_self");
    });
  }
}
