// var foodapi = require("../../api/food.json");

var addcarts = document.querySelectorAll('.label-icon-cart');

for (var i = 0; i < addcarts.length; i++) {
    addcarts[i].onclick = function(e) {
        var tem = document.querySelector('.modal-container');
        tem.classList.add('modal--active');
    }
}

var outcarts = document.querySelector('.close__modal-icon');
    outcarts.onclick = function(e) {
    var tem = document.querySelector('.modal-container');
    tem.classList.remove('modal--active');
}


// select category
var categoryList = document.getElementsByClassName('img-text');
for (var i = 0; i<categoryList.length;i++){
    categoryList[i].onclick = function(){
        categoryListTemp = document.getElementsByClassName('img-text');
        for (var i = 0;i<categoryListTemp.length;i++)
            categoryListTemp[i].className = 'img-text';
        this.classList.add('category-active');
    };
}

