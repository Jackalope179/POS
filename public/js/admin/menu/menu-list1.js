let foods = [];
let searchfoods = [];
let search = $("#search").attr("value");

//--------------------------- Check Search -------------------------

// Search food list
if (search == 1 || search == "1") {
  let foodSearch = $(".foodSearch").toArray();
  foodSearch.forEach((foodItem) => {
    let image = $(foodItem).find(".image").attr("value");
    let name = $(foodItem).find(".name").attr("value");
    let foodDescribe = $(foodItem).find(".foodDescribe").attr("value");
    let category = $(foodItem).find(".category").attr("value");
    let isRecommended = $(foodItem).find(".isRecommended").attr("value");
    let price = $(foodItem).find(".price").attr("value");
    let foodId = $(foodItem).find(".foodId").attr("value");

    searchfoods.push({
      foodId: foodId,
      name: name,
      image: image,
      foodDescribe: foodDescribe,
      category: category,
      isRecommended: isRecommended,
      price: price,
    });
  });
  RenderSearch();
}

//  ------------------------------Show search result---------------------------------
function RenderSearch() {
  var temp = ``;
  let foodList = document.querySelector(".food_list-js");
  for (var i = 0; i < searchfoods.length; i++) {
    if (searchfoods[i].isRecommended == 1)
      temp += `
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card card--best-seller">
                            <img class="card-img-top" src=${
                              searchfoods[i].image
                            } alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">${
                                  searchfoods[i].name
                                }</h5>
                                <div class="label-control">
                                    <p class="card-text">GIÁ: ${Number(
                                      searchfoods[i].price
                                    ).toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    else
      temp += `
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card">
                            <img class="card-img-top" src=${
                              searchfoods[i].image
                            } alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">${
                                  searchfoods[i].name
                                }</h5>
                                <div class="label-control">
                                    <p class="card-text">GIÁ: ${Number(
                                      searchfoods[i].price
                                    ).toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
  }
  foodList.innerHTML = temp;
}

// ---------------------------------Get all food in menu--------------------------------

function getAllFood() {
  let foodList = $(".foodList").toArray();
  foodList.forEach((foodItem) => {
    let image = $(foodItem).find(".image").attr("value");
    let name = $(foodItem).find(".name").attr("value");
    let foodDescribe = $(foodItem).find(".foodDescribe").attr("value");
    let category = $(foodItem).find(".category").attr("value");
    let isRecommended = $(foodItem).find(".isRecommended").attr("value");
    let price = $(foodItem).find(".price").attr("value");
    let foodId = $(foodItem).find(".foodId").attr("value");

    foods.push({
      foodId: foodId,
      name: name,
      image: image,
      foodDescribe: foodDescribe,
      category: category,
      isRecommended: isRecommended,
      price: price,
    });
  });
}
getAllFood();

// -------------------MENU------------------------------------------
// render menu
function ShowMenu(category) {
  var temp = ``;
  let foodList = document.querySelector(".food_list-js");
  for (var i = 0; i < foods.length; i++) {
    if (foods[i].category == category || category == "menu") {
      if (foods[i].isRecommended == 1)
        temp += `
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card card--best-seller">
                            <img class="card-img-top" src=${
                              foods[i].image
                            } alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">${foods[i].name}</h5>
                                <div class="label-control">
                                    <p class="card-text">GIÁ: ${Number(
                                      foods[i].price
                                    ).toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
      else
        temp += `
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card">
                            <img class="card-img-top" src=${
                              foods[i].image
                            } alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">${foods[i].name}</h5>
                                <div class="label-control">
                                    <p class="card-text">GIÁ: ${Number(
                                      foods[i].price
                                    ).toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    }
  }
  foodList.innerHTML = temp;
}



// ---------------------MODAL----------------------------------------------------
// set button show info
function SetShowEdit(){
    var foodsSelected = document.querySelectorAll('.card');
    foodsSelected.forEach(food=>{
        food.onclick = function(e) {
            var tem = document.querySelector('.modal-container');
            tem.classList.add('modal--active');
            var info = food.innerText.split("\n");
            console.log("inf:    ", info[0])
            SetDetail(info[0]);
        } 
        return food;
    })
}
// function SetShowEdit1(){
//     var foodsSelected = document.querySelectorAll('.card-title');
//     foodsSelected.forEach(food=>{
//         food.onclick = function(e) {
//             var tem = document.querySelector('.modal-container');
//             tem.classList.add('modal--active');
//         } 
//         return food;
//     })
// }
// function SetShowEdit2(){
//     var foodsSelected = document.querySelectorAll('.card-text');
//     foodsSelected.forEach(food=>{
//         food.onclick = function(e) {
//             var tem = document.querySelector('.modal-container');
//             tem.classList.add('modal--active');
//         } 
//         return food;
//     })
// }

function SetShowConfirm(){
    var foodsSelected = document.querySelectorAll('.admin__remove');
    foodsSelected.forEach(food=>{
        food.onclick = function(e) {
            var tem = document.querySelector('.modal');
            tem.classList.add('modal--active');
        } 
        return food;
    })
}

// close confirm
var confirms = document.querySelector('.btn-secondary');
confirms.onclick = function(e) {
    var tem = document.querySelector('.modal');
    tem.classList.remove('modal--active');
}


// set info for modal food detail
function SetDetail(name){
    // get info food
    let foodSelected = foods.find((food) =>{
        return food.name === name;
    });
    // get element modal
    // const modalImage = document.getElementsByClassName('modal__image')[0];
    document.getElementById('modal__image_id').innerHTML=`<img src=${foodSelected.image} alt="" /> `;
    document.getElementById('modal_foodID').value=foodSelected.foodId;
    document.getElementById('modal_foodName').value=foodSelected.name;
    document.getElementById('modal_foodPrice').value=NumberWithCommas(foodSelected.price);
    document.getElementById('modal_foodType').value=foodSelected.category;
    document.getElementById('modal_isBestSeller').value=foodSelected.isRecommended;
    document.getElementById('modal_foodDescribe').value=foodSelected.foodDescribe;
    // set image
    // modalImage.innerHTML= `<img src=${foodSelected.image} alt="" /> `
    // set name
}

var adminAdd = document.querySelector('.admin-add');
adminAdd.onclick = ()=>{
    var tem = document.querySelector('.modal-container');
    tem.classList.add('modal--active');
}


// // close food detail
var outcarts = document.querySelector('.close__modal-icon');
// console.log(outcarts);
outcarts.onclick = function(e) {
    var tem = document.querySelector('.modal-container');
    tem.classList.remove('modal--active');
}




// ---------------------------CATEGORY------------------------------------
// select category
var categoryList = document.getElementsByClassName("single-box");
for (var i = 0; i < categoryList.length; i++) {
  categoryList[i].onclick = function () {
    // active select category
    var categoryListTemp = document.getElementsByClassName("single-box");
    for (var i = 0; i < categoryListTemp.length; i++)
      categoryListTemp[i].className = "single-box";
    this.classList.add("category-active");

    // render food
    let foodList = document.querySelector(".food_list-js");
    let cateName = document.querySelector(".food_list_name-js");
    this.innerText.toLowerCase();
    cateName.innerText = this.innerText;
    ShowMenu(cateName.innerText.toLowerCase());
    SetShowEdit();
  };
}


function NumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
  }


  
// ----------------------FIRST RUN ------------------------------------------------
if (search != 1) {
  ShowMenu("menu");
}
SetShowEdit();
// SetShowEdit1();
// SetShowEdit2();
SetShowConfirm();
document.querySelectorAll(".header .nav-link")[0].classList.add("active");
