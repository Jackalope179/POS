// open cart-mobile
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
