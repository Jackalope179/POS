function NumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
  }
  

$(document).ready(function(){
    let total = document.querySelector('.total-amount').innerText;
    let price = parseInt(total.split(' ')[0]*1000);
    let price_vat = price*0.1
    let all_par = document.querySelectorAll('div.sub_money');
    let all_vat = document.querySelectorAll('div.vat_money');
    let all_total = document.querySelectorAll('div.total_money');
    for (var i = 0; i <all_par.length;i++){
        all_par[i].innerHTML = total;
        all_vat[i].innerHTML = String(NumberWithCommas(price_vat))+' VNĐ';
        all_total[i].innerHTML = String(NumberWithCommas(price_vat+price))+' VNĐ';
    }
    document.querySelector('.credit-total').value = String(price_vat+price);
    document.querySelector('.direct-total').value = String(price_vat+price);
    document.querySelector('.net-total').value = String(price_vat+price);
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



