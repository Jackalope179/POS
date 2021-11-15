var close_detail = document.querySelector('.close__modal-icon');
close_detail.onclick = function(e) {
    var tem = document.querySelector('.modal-container');
    tem.classList.remove('modal--active');
}

function showDetail(){
    var foodsSelected = document.querySelectorAll('.btn-primary');
    foodsSelected.forEach(food=>{
        food.onclick = function(e) {
            var tem = document.querySelector('.modal-container');
            tem.classList.add('modal--active');
        } 
        return food;
    })
}

showDetail()