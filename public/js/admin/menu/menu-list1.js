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
                                    <p class="card-text">GIÁ: ${NumberWithCommas(Number(
                                      searchfoods[i].price
                                    ))}</p>
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
                                    <p class="card-text">GIÁ: ${NumberWithCommas(Number(
                                      searchfoods[i].price
                                    ))}</p>
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
                                    <p class="card-text">GIÁ: ${NumberWithCommas( Number(
                                     foods[i].price
                                    ))}</p>
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
                                    <p class="card-text">GIÁ: ${ NumberWithCommas( Number(
                                     foods[i].price
                                    ))}</p>
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
            SetDetail(info[0]);
        }
        return food;
    })
}


var confirms = document.querySelector('.btn-danger');
confirms.onclick = function(e) {
    // var tem = document.querySelector('.admin-modal');
    // tem.classList.remove('modal--active');
    // var tem1 = document.querySelector('.delete-food-modal');
    // tem1.classList.add('modal--active')
    // var tem2 = document.querySelector('.modal-dialog');
    // console.log(tem2)
    // tem2.classList.add('modal--active')
  //   var actualModal = $(this).attr('data-actual');
  //   var newModal = $(this).attr('data-target');

  //   $(actualModal).modal('hide');
  //   $(newModal).modal('show');

  //   $( '.admin-modal' ).on( 'shown.bs.modal', function(){
  //     document.body.classList.add( 'modal-open' );
  // });
  // $( '.delete-food-modal' ).on( 'shown.bs.modal', function(){
  //     document.body.classList.add( 'modal-open' );
  // });
}

$(document).on('hidden.bs.modal', function () {
  if ($('.modal:visible').length) {
    $('body').addClass('modal-open');
  }
});


$(document).off('focusin.modal');
$('#delete-food-modal').appendTo("body");

$('#modal_image_file').change(function(e) {
  document.getElementById('modal_image').value='./img/' + document.getElementById('modal_image_file').value.replace(/C:\\fakepath\\/, '');
  document.getElementById('modal__image_id').innerHTML=`<img src=${document.getElementById('modal_image').value} alt="" /> `;
});

$('#image_file_add').change(function(e) {
  document.getElementById('image').value='./img/' + document.getElementById('image_file_add').value.replace(/C:\\fakepath\\/, '');
});

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
    document.getElementById('modal_foodPrice').value=foodSelected.price;
    document.getElementById('modal_foodType').value=foodSelected.category;
    document.getElementById('modal_isBestSeller').value=foodSelected.isRecommended;
    document.getElementById('modal_foodDescribe').value=foodSelected.foodDescribe;
    document.getElementById('modal_image').value=foodSelected.image;
}

// var adminAdd = document.querySelector('.admin-add');
// adminAdd.onclick = ()=>{
//     var tem = document.querySelector('.modal-container');
//     tem.classList.add('modal--active');
// }


// // close food detail
var outcarts = document.querySelector('.close__modal-icon');
console.log(outcarts);
outcarts.onclick = function(e) {
    var tem = document.querySelector('.modal-container');
    tem.classList.remove('modal--active');
}




// ---------------------------CATEGORY------------------------------------
// select category
var categoryList = document.getElementsByClassName("single-box");
for (var i = 0; i < categoryList.length; i++) {
    categoryList[i].onclick = function() {
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
        SetShowDetail();
    };
}


function NumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var btnDeleteFood = document.getElementById('btn-delete-food');
    foodForm = document.forms['food-form'];
    btnDeleteFood.onclick = function () {
      foodForm.action = '/menu-admin/' + 'deleteFood';
      // foodForm.method = 'delete'
      foodForm.submit();
  }
  });


// ----------------------FIRST RUN ------------------------------------------------
if (search != 1) {
  ShowMenu("menu");
}
SetShowEdit();
// SetShowEdit1();
// SetShowEdit2();
// SetShowConfirm();

document.querySelectorAll(".header .nav-link")[0].classList.add("active");
