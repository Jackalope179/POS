// var close_detail = document.querySelector('.close__modal-icon');
// close_detail.onclick = function(e) {
//     var tem = document.querySelector('.modal-container');
//     tem.classList.remove('modal--active');
// }


var cancel = document.querySelector('.btn-secondary');
cancel.onclick = function(e) {
    var tem = document.querySelector('.modal');
    tem.classList.remove('modal--active');
}
var openAdd = document.querySelector('.admin-acc');
openAdd.onclick = function(e) {
    var tem = document.querySelector('.modal');
    tem.classList.add('modal--active');
}
