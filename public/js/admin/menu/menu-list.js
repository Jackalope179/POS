let foods = [{
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
        "foodid": "14",
        "name": "Hamburger",
        "price": "20000",
        "foodDescribe": "Lurger Burger fat burger",
        "image": "./img/image-food1.jpg",
        "category": "thức ăn nhanh",
        "isRecommended": 0
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

// render menu
function ShowMenu(category){
    var temp = ``;
    let foodList = document.querySelector('.food_list-js');
    for (var i = 0; i < foods.length; i++) {
        if (foods[i].category == category || category == 'menu'){
            if (foods[i].isRecommended == 1)
                temp += `
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="card card--best-seller">
                            <img class="card-img-top" src=${foods[i].image} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">${foods[i].name}</h5>
                                <div class="label-control">
                                    <p class="card-text">GIÁ: ${foods[i].price}</p>
                                    <a href="#" class="label-icon-cart">
                                        <i class="label-icon fas fa-cart-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            else
                temp += `
                    <div class="col-sm-6 col-md-4 col-lg-2">
                        <div class="card">
                            <img class="card-img-top" src=${foods[i].image} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">${foods[i].name}</h5>
                                <div class="label-control">
                                    <p class="card-text">GIÁ: ${foods[i].price}</p>
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
}

// set button show info
function SetShowDetail(){
    var foodsSelected = document.querySelectorAll('.card');
    foodsSelected.forEach(food=>{
        food.onclick = function(e) {
            var tem = document.querySelector('.modal-container');
            tem.classList.add('modal--active');
            var info = food.innerText.split('\n');
            SetDetail(info[0]);
        } 
        return food;
    })
}

// set info for modal food detail
function SetDetail(name){
    // get info food
    let foodSelected = foods.find((food) =>{
        return food.name === name;
    });
    let foodNum = 1;
    // get element modal
    const modalImage = document.getElementsByClassName('modal__image')[0];
    const modalInfo = document.getElementsByClassName('food-base')[0];
    const modalQuantity = document.getElementsByClassName('food-quantity')[0];
    // set image
    modalImage.innerHTML= `<img src=${foodSelected.image} alt="" /> `
    // set name
    modalInfo.innerHTML = `
        <div class="food-base__field">
            <div class="food-base__field--name">${foodSelected.name}</div>
            <div class="food-base__field--content">Khai vị</div>
        </div>
        <div class="food-base__field">
            <div class="food-base__field--name">Giá</div>
            <div class="food-base__field--content">${foodSelected.price}</div>
        </div>
    `
    // set quantity
    modalQuantity.innerHTML = `
        <div class="food-quantity__field">Số Lượng</div>
        <div class="food-quantity__content">
            <button class="food-quantity__button">-</button>
            <div class="food-quantity__content--body">${foodNum}</div>
            <button class="food-quantity__button">+</button>
        </div>
    `
    const buttons = document.getElementsByClassName('food-quantity__button');
    buttons[0].onclick = ()=>{
        foodNum--;
        let count = modalQuantity.querySelector('.food-quantity__content--body');
        count.innerText = foodNum;
    }
    buttons[1].onclick = ()=>{
        foodNum++;
        let count = modalQuantity.querySelector('.food-quantity__content--body');
        count.innerText = foodNum;
    }
    const addToCartButton = document.querySelector('.modal__button');
    addToCartButton.onclick = ()=>{
        AddToCart(foodSelected,foodNum);
        var tem = document.querySelector('.modal-container');
        tem.classList.remove('modal--active');
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
for (var i = 0; i < categoryList.length; i++) {
    categoryList[i].onclick = function() {
        // active select category
        var categoryListTemp = document.getElementsByClassName('single-box');
        for (var i = 0; i < categoryListTemp.length; i++)
            categoryListTemp[i].className = 'single-box';
        this.classList.add('category-active');

        // render food
        let foodList = document.querySelector('.food_list-js');
        let cateName = document.querySelector('.food_list_name-js');
        this.innerText.toLowerCase()
        cateName.innerText = this.innerText;
        ShowMenu(cateName.innerText.toLowerCase())
        SetShowDetail();
    };
}

// add to cart
var cartList = [];
function AddToCart(food, foodNum){
    var check = cartList.find((item)=>{
        return item.foodid === food.foodid;
    })
    if (check)
        check.number += foodNum  
    else
        cartList.push({...food, number: foodNum});

    RenderCart();
    RenderCartMobile();
}

var removeAllButton = document.querySelector('.remove-all-button');
removeAllButton.onclick = ()=>{
    cartList = []
    RenderCart();
    RenderCartMobile();
}

function RenderCart(){
    let cart = document.querySelector('.cart');
    let total = document.querySelector('.total-amount');
    cart.innerHTML = cartList.reduce((temp, item)=>{
        return temp += `
        <div class="row" id="cart-row">
            <div class="col-sm-3" id="img-row">
                <div class="image-box">
                    <img src=${item.image} style="{" height="80px" , width="100%" } id="img-food"/>
                </div>
            </div>
            <div class="col-sm-6" id="name-button-row">
                <div class="row">
                    <div class="col" id="title-row">
                        <p class="title">${item.name}</p>
                    </div>
                </div>
                <div class="row num-change">
                    <div class="col" id="button-row">
                        <div class="counter">
                            <div class="btn1">-</div>
                            <div class="count">${item.number}</div>
                            <div class="btn2">+</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-3" id="remove-price">
                <div class="prices">
                    <div class="remove"><img src="./img/garbage1.png" style="{" height="27px" , width="27px" } />
                    </div>
                    <div class="amount">${NumberWithCommas(Number(item.price)*item.number)}</div>
                </div>

            </div>
        </div>
        <hr />
        `;
    }, ``);
    var sum = cartList.reduce((temp,item)=>{
        return temp + Number(item.price)*item.number;
    },0)
    total.innerText = NumberWithCommas(sum) + '';
}

function RenderCartMobile(){

}

// format number xxx.xxx
function NumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}



// show cart mobile
var cartMobileButton = document.querySelector('.cart-mobile__button');
var cartMobile = document.querySelector('.cart-mobile');
cartMobileButton.onclick = function(){
    cartMobile.style.display = 'flex';
    this.style.display = "none";
};
// close cart mobile 
var cartMobileClose = cartMobile.querySelector('i');
cartMobileClose.onclick = ()=>{
    cartMobile.style.display = "none";
    cartMobileButton.style.display = "block";
}


// first run

ShowMenu('menu');
SetShowDetail();