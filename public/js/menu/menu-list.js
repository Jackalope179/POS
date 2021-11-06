


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

function selectCategory(category){
    var menuList = document.querySelector('.menu_list-js');
}
