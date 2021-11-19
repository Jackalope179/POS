
document.querySelectorAll('.header .nav-link')[1].classList.add('active');


function SetClose(){
    var closeBtn = document.querySelectorAll('.table-close')
    closeBtn.forEach(btn=>{
        btn.onclick = ()=>{
            document.querySelector('.modal').classList.add('modal-table'); 
        }
    })
}

document.querySelector('.modal .btn-secondary').onclick = ()=>{
    document.querySelector('.modal').classList.remove('modal-table'); 
}

SetClose();
