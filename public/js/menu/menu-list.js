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
                                    )}</p>
                                    <a href="#" class="label-icon-cart">
                                        <i class="label-icon fas fa-cart-plus"></i>
                                    </a>
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
                                    )}</p>
                                    <a href="#" class="label-icon-cart">
                                        <i class="label-icon fas fa-cart-plus"></i>
                                    </a>
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
                                    <p class="card-text">GIÁ: ${NumberWithCommas(Number(
                                      foods[i].price
                                    ))}</p>
                                    <a href="#" class="label-icon-cart">
                                        <i class="label-icon fas fa-cart-plus"></i>
                                    </a>
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
                                    <p class="card-text">GIÁ: ${ NumberWithCommas(Number(
                                      foods[i].price
                                    ))}</p>
                                    <a href="#" class="label-icon-cart">
                                        <i class="label-icon fas fa-cart-plus"></i>
                                    </a>
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
function SetShowDetail() {
    var foodsSelected = document.querySelectorAll(".card");
    foodsSelected.forEach((food) => {
        food.onclick = function(e) {
            var tem = document.querySelector(".modal-container");
            tem.classList.add("modal--active");
            var info = food.innerText.split("\n");
            SetDetail(info[0]);
        };
        return food;
    });
}

// set info for modal food detail
function SetDetail(name) {
    // get info food
    let foodSelected = foods.find((food) => {
        return food.name === name;
    });
    let foodNum = 1;
    // get element modal
    const modalImage = document.getElementsByClassName("modal__image")[0];
    const modalInfo = document.getElementsByClassName("food-base")[0];
    const modalQuantity = document.getElementsByClassName("food-quantity")[0];
    const modalDetail = document.getElementsByClassName("food-detail")[0];
    // set image
    modalImage.innerHTML = `<img src=${foodSelected.image} alt="" /> `;
    // set name
    modalInfo.innerHTML = `
        <div class="food-base__field">
            <div class="food-base__field--name">${foodSelected.name}</div>
            <div class="food-base__field--content">${foodSelected.category.toUpperCase()}</div>
        </div>
        <div class="food-base__field">
            <div class="food-base__field--price_name">Giá</div>
            <div class="food-base__field--price">${ NumberWithCommas((
              foodSelected.price
            ))}</div>
        </div>
    `;
    // set quantity
    modalQuantity.innerHTML = `
        <div class="food-quantity__field">Số Lượng</div>
        <div class="food-quantity__content">
            <button class="food-quantity__button">-</button>
            <div class="food-quantity__content--body">${foodNum}</div>
            <button class="food-quantity__button">+</button>
        </div>
    `;
    modalDetail.innerHTML = `
    <div class="food-detail__field">
        <div class="food-detail__field--name">Thành phần:</div>
        <div class="food-detail__field--content">${foodSelected.foodDescribe}</div>
        </div>
    </div>
    `;

    const buttons = document.getElementsByClassName("food-quantity__button");
    buttons[0].onclick = () => {
        if (foodNum > 1) foodNum--;
        let count = modalQuantity.querySelector(".food-quantity__content--body");
        count.innerText = foodNum;
    };
    buttons[1].onclick = () => {
        foodNum++;
        let count = modalQuantity.querySelector(".food-quantity__content--body");
        count.innerText = foodNum;
    };
    const addToCartButton = document.querySelector(".modal__button");
    addToCartButton.onclick = () => {
        AddToCart(foodSelected, foodNum);
        var tem = document.querySelector(".modal-container");
        tem.classList.remove("modal--active");
    };
}

// close food detail
var outcarts = document.querySelector(".close__modal-icon");
outcarts.onclick = function(e) {
    var tem = document.querySelector(".modal-container");
    tem.classList.remove("modal--active");
};

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

// -------------------CART-------------------------------------------
var cartList = [];
var totalPrice = 0;

function getCurrentCartList() {
    let imageList = document.querySelectorAll(".imageList")
    let nameList = document.querySelectorAll(".col-name")
    let quantityList = document.querySelectorAll(".col-quantity")
    let amountList = document.querySelectorAll(".amount")

    if (imageList.length > 0) {
        for (var i = 0; i < imageList.length; i++) {
            cartList.push({
                image: imageList[i].src,
                name: nameList[i].innerText,
                number: Number(quantityList[i].innerText),
                price: Number(amountList[i].innerText.replaceAll(".", "")) / Number(quantityList[i].innerText)
            })
        }

    }
    console.log(cartList);
}
getCurrentCartList()

function AddToCart(food, foodNum) {
    var check = cartList.find((item) => {
        return item.foodId === food.foodId;
    });
    if (check) check.number += foodNum;
    else cartList.push({...food, number: foodNum });

    RenderCart();
    RenderCartMobile();
}

var removeAllButton = document.querySelectorAll(".remove-all-button");
removeAllButton[0].onclick = removeAllButton[1].onclick = () => {
    cartList = [];
    RenderCart();
    RenderCartMobile();
};

function RenderCart() {
    let cart = document.querySelector(".cart");
    let total = document.querySelector(".total-amount");
    // let cartInnerHTML = $('.cart').html()
    cart.innerHTML = cartList.reduce((temp, item) => {
        return (temp += `
        <div class="row cart__item" id="cart-row">
            <div class="col-sm-3" id="img-row">
                <div class="image-box">
                    <img src=${
                      item.image
                    } style="{" height="80px" , width="100%" } id="img-food"/>
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
                    <div class="amount">${NumberWithCommas(
                      Number(item.price) * item.number
                    )}</div>
                </div>

            </div>
        </div>
        <hr />
        `);
    }, ``);
    // get price
    GetTotalPrice();

    // setup count button
    let cartItems = document.querySelectorAll(".cart__item");
    cartItems.forEach((item) => {
        SetCartButton(item);
    });
}

function GetTotalPrice() {
    let total = document.querySelector(".total-amount");
    let totalMobile = document.querySelector(
        ".cart-mobile__checkout .total-amount"
    );
    totalPrice = cartList.reduce((temp, item) => {
        return temp + Number(item.price) * item.number;
    }, 0);
    total.innerText = totalMobile.innerText =
        NumberWithCommas(totalPrice) + " VND";
}

function SetCartButton(item) {
    let subtractButton = item.querySelector(".counter .btn1");
    let addButton = item.querySelector(".counter .btn2");
    let removeButton = item.querySelector(".remove");

    let itemData = cartList.find((food) => {
        return food.name === item.innerText.split("\n")[0];
    });
    subtractButton.onclick = () => {
        if (itemData.number > 0) {
            itemData.number--;
            RenderCount();
            RenderCart();

            GetTotalPrice();
        }
    };
    addButton.onclick = () => {
        itemData.number++;
        RenderCount();
        RenderCart();

        GetTotalPrice();
    };
    removeButton.onclick = () => {
        for (var i = 0; i < cartList.length; i++)
            if (cartList[i] === itemData) {
                cartList.splice(i, 1);
                RenderCart();

                RenderCartMobile();
            }
    };
}

// cart mobile----------------
function RenderCartMobile() {
    let cart = document.querySelector(".cart-mobile__body");
    cart.innerHTML = cartList.reduce((temp, item) => {
        return (temp += `
            <div class="cart-item">
                <div class="image-box">
                    <img src="${item.image}" alt="" />
                </div>
                <div class="content-box">
                    <div class="content-box__name">${item.name}</div>
                    <div class="content-box__number">
                        <div class="content-box__button">-</div>
                        <div class="content-box__count">${item.number}</div>
                        <div class="content-box__button">+</div>
                    </div>
                </div>
                <div class="remove-box">
                    <div class="remove-box__garbage">
                        <img src="./img/garbage1.png">
                    </div>
                    <div class="remove-box__price">${item.price}</div>
                </div>
            </div>
            <hr />
        `);
    }, ``);
    GetTotalPrice();
    let cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach((item) => {
        SetCartButtonMobile(item);
    });
}

function SetCartButtonMobile(item) {
    let btn = item.getElementsByClassName("content-box__button");
    let removeBtn = item.querySelector(".remove-box__garbage");
    let itemData = cartList.find((food) => {
        return food.name === item.querySelector(".content-box__name").innerText;
    });
    // console.log(numCount);
    btn[0].onclick = () => {
        if (itemData.number > 0) {
            itemData.number--;
            RenderCount();
            GetTotalPrice();
        }
    };
    btn[1].onclick = () => {
        itemData.number++;
        RenderCount();
        GetTotalPrice();
    };
    removeBtn.onclick = () => {
        for (var i = 0; i < cartList.length; i++)
            if (cartList[i] === itemData) {
                cartList.splice(i, 1);
                RenderCart();
                RenderCartMobile();
            }
    };
}

function RenderCount() {
    let count = document.querySelectorAll(".cart__item .count");
    let countMobie = document.querySelectorAll(".cart-item .content-box__count");
    for (var i = 0; i < cartList.length; i++) {
        count[i].innerText = countMobie[i].innerText = cartList[i].number;
    }
}

// show cart mobile
var cartMobileButton = document.querySelector(".cart-mobile__button");
var cartMobile = document.querySelector(".cart-mobile");
cartMobileButton.onclick = function() {
    cartMobile.classList.add("cart-mobile--active");
    this.classList.remove("cart-mobile__button--active");
};

// close cart mobile
var cartMobileClose = cartMobile.querySelector("i");
cartMobileClose.onclick = () => {
    cartMobile.classList.remove("cart-mobile--active");
    cartMobileButton.classList.add("cart-mobile__button--active");
};

$("#submit-payment").submit(function(e) {
    // e.preventDefault();
    let $cartListform = $("#cartList");
    let $totalPrice = $("#totalPrice");

    let totalprice = parseInt($(".total-amount").html().replaceAll(".", ""));
    let cart = ``;
    cartList.forEach((food) => {
        cart += `${food.name},${food.image},${food.number},${
      food.price * food.number
    }\n`;
    });

    $cartListform.val(cart);
    $totalPrice.val(totalprice);
    $(this).unbind("submit").submit();
});

// -----------------FORMAT NUMBER: xxx.xxx------------------------
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
SetShowDetail();
document.querySelectorAll(".header .nav-link")[0].classList.add("active");