$(document).ready(function(){
    let total = document.querySelector('.total-amount').innerText;
    document.querySelector('#credit-card > form > div:nth-child(5) > div.sub_money').innerHTML = total;
    document.querySelector('#net-banking > div:nth-child(3) > div.sub_money').innerHTML = total;
    document.querySelector('#direct-cash > div:nth-child(2) > div.sub_money').innerHTML = total;
    price = parseInt(total.split(' ')[0]);
    price_vat = price*0.1
    document.querySelector('#credit-card > form > div:nth-child(6) > div.sub_money').innerHTML = String(price_vat)+'.000 VNĐ';
    document.querySelector('#net-banking > div:nth-child(4) > div.sub_money').innerHTML = String(price_vat)+'.000 VNĐ';
    document.querySelector('#direct-cash > div:nth-child(3) > div.sub_money').innerHTML = String(price_vat)+'.000 VNĐ';
    document.querySelector('#credit-card > form > div.total_row > div.total_money').innerHTML = String(price+price_vat)+'.000 VNĐ';
    document.querySelector('#net-banking > div.total_row > div.total_money').innerHTML = String(price+price_vat)+'.000 VNĐ';
    document.querySelector('#direct-cash > div.total_row > div.total_money').innerHTML = String(price+price_vat)+'.000 VNĐ';


});


// open cart-mobile
var cartMobileButton = document.querySelector('.cart-mobile__button');
var cartMobile = document.querySelector('.cart-mobile');
cartMobileButton.onclick = function(){
    cartMobile.classList.add('cart-mobile--active');
    this.classList.remove('cart-mobile__button--active');
};
// close cart mobile 
var cartMobileClose = cartMobile.querySelector('i');
cartMobileClose.onclick = ()=>{
    cartMobile.classList.remove('cart-mobile--active');
    cartMobileButton.classList.add('cart-mobile__button--active');
}



