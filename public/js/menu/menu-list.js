let food = [
    {
      "foodid": "6",
      "name": "Nước lọc Dasani",
      "price": "10000",
      "foodDescribe": "nước uống",
      "image": "./img/image-food4.jpg",
      "category": "nước uống",
      "isRecommended": 0
    },
    {
      "foodid": "7",
      "name": "Bia Heneiken",
      "price": "20000",
      "foodDescribe": "nước uống",
       "image": "./img/image-food5.jpg",
      "category": "nước uống",
      "isRecommended": "1"
    },
    {
      "foodid": "8",
      "name": "Bia Tiger",
      "price": "20000",
      "foodDescribe": "Fresh machiato",
       "image": "./img/image-food6.jpg",
      "category": "nước uống",
      "isRecommended": "1"
    },
    {
      "foodid": "9",
      "name": "Coca cola",
      "price": "15000",
      "foodDescribe": "Medium BBQ beef",
       "image": "./img/image-food7.jpg",
      "category": "nước uống",
      "isRecommended": 0
    },
    {
      "foodid": "10",
      "name": "Pepsi",
      "price": "15000",
      "foodDescribe": "Masterpiece french rice",
       "image": "./img/image-food8.jpg",
      "category": "nước uống",
      "isRecommended": 0
    },
    {
      "foodid": "11",
      "name": "Bún bò Huế",
      "price": "35000",
      "foodDescribe": "Fresh orange juice",
       "image": "./img/image-food9.jpg",
      "category": "cơm bún phở",
      "isRecommended": 0
    },
    {
      "foodid": "12",
      "name": "Cơm tấm",
      "price": "35000",
      "foodDescribe": "Fresh pineapple juice ",
       "image": "./img/image-food10.jpg",
      "category": "cơm bún phở",
      "isRecommended": "1"
    },
    {
      "foodid": "13",
      "name": "Phở gà",
      "price": "35000",
      "foodDescribe": "Fat cake, birthday cake",
       "image": "./img/image-food11.jpg",
      "category": "cơm bún phở",
      "isRecommended": "1"
    },
    {
      "foodid": "14",
      "name": "Hamburger",
      "price": "20000",
      "foodDescribe": "Lurger Burger fat burger",
       "image": "./img/image-food1.jpg",
      "category": "thức ăn nhanh",
      "isRecommended": 0
    },
    {
      "foodid": "15",
      "name": "Pizza",
      "price": "20000",
      "foodDescribe": "Coffee cake mocha machiato",
       "image": "./img/image-food12.jpg",
      "category": "thức ăn nhanh",
      "isRecommended": "1"
    },
    {
      "foodid": "16",
      "name": "Khoai tây chiên",
      "price": "50000",
      "foodDescribe": "Noodle for family, noodle",
       "image": "./img/image-food13.jpg",
      "category": "thức ăn nhanh",
      "isRecommended": "1"
    },
    {
      "foodid": "17",
      "name": "Lẩu thái",
      "price": "100000",
      "foodDescribe": "Fat cake, birthday bread",
       "image": "./img/image-food14.jpg",
      "category": "lẩu",
      "isRecommended": "1"
    },
    {
      "foodid": "17",
      "name": "Lẩu ếch",
      "price": "100000",
      "foodDescribe": "Fat cake, birthday bread",
       "image": "./img/image-food15.jpg",
      "category": "lẩu",
      "isRecommended": "1"
    }
];
  

// open food detail
var foodsSelected = document.querySelectorAll('.card');
for (var i = 0; i < foodsSelected.length; i++) {
    foodsSelected[i].onclick = function(e) {
        var tem = document.querySelector('.modal-container');
        tem.classList.add('modal--active');
    }
}
// close food detail
var outcarts = document.querySelector('.close__modal-icon');
    outcarts.onclick = function(e) {
    var tem = document.querySelector('.modal-container');
    tem.classList.remove('modal--active');
}


// select category
var categoryList = document.getElementsByClassName('single-box');
for (var i = 0; i<categoryList.length;i++){
    categoryList[i].onclick = function(){
        var categoryListTemp = document.getElementsByClassName('single-box');
        for (var i = 0;i<categoryListTemp.length;i++)
            categoryListTemp[i].className = 'single-box';
        this.classList.add('category-active');
        let foodList = document.querySelector('.food_list-js');
        let cateName = document.querySelector('.food_list_name-js');
        cateName.innerText = this.innerText;
        var temp = ``;
        for (var i =0;i<food.length;i++){
            if (food[i].category == this.innerText.toLowerCase() || this.innerText == 'MENU'){
                if (food[i].isRecommended == 1)
                    temp += `
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card card--best-seller">
                                <img class="card-img-top" src=${food[i].image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">${food[i].name}</h5>
                                    <div class="label-control">
                                        <p class="card-text">GIÁ: ${food[i].price}</p>
                                        <a href="#" class="label-icon-cart">
                                            <i class="label-icon fas fa-cart-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                else 
                    temp+= `
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                                <img class="card-img-top" src=${food[i].image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">${food[i].name}</h5>
                                    <div class="label-control">
                                        <p class="card-text">GIÁ: ${food[i].price}</p>
                                        <a href="#" class="label-icon-cart">
                                            <i class="label-icon fas fa-cart-plus"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
            }
        }
        foodList.innerHTML = temp;
        var foodsSelected = document.querySelectorAll('.card');
        for (var i = 0; i < foodsSelected.length; i++) {
            foodsSelected[i].onclick = function(e) {
                var tem = document.querySelector('.modal-container');
                tem.classList.add('modal--active');
            }
        }
    };
}


// show cart mobile
var cartMobileStatus = false
document.querySelector('.cart-mobile__button').onclick = function(){
  var cartMobile = document.querySelector('.cart-mobile');
  if (!cartMobileStatus){
    cartMobile.style.display = 'flex'
    cartMobileStatus = true
  }
  else{
    cartMobile.style.display = 'none'
    cartMobileStatus = false
  }

};

