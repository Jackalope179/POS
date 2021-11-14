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
