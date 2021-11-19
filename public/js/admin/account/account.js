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
    var tem = document.querySelector('.add-clerk');
    tem.classList.add('modal--active');
}

var openDeleteConfirm = document.querySelector('.btn-delete-clerk');
openDeleteConfirm.onclick = function(e) {
    // document.getElementById('phone-input').value = openDeleteConfirm.getAttribute("data-id")
    var tem = document.querySelector('#delete-clerk-modal');
    tem.classList.add('modal--active');
}

$('#delete-clerk-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    document.getElementById('phone-input').value = button.data('id') // Extract info from data-* attributes
});

var delete_form = document.forms[1];

document.addEventListener('DOMContentLoaded', function() {
var delete_clerk_btn = document.getElementById('delete-clerk-btn');
console.log(delete_clerk_btn);
// var delete_form = $('form[name="delete-clerk-form"]');
delete_clerk_btn.onclick = function() {
    console.log(delete_form);
    console.log(document.getElementById('phone-input').value)
    delete_form.action = '/account-admin/' + 'deleteClerk';
    delete_form.submit();
}
});


var add_clerk_form = document.forms[0]
var add_clerk_btn = document.querySelector('.add-clerk-btn');
add_clerk_btn.onclick = function(e) {
    add_clerk_form.submit();
};