
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3 ,
        slidesToScroll: 1,
        prevArrow : ".slide_to_left" , 
        nextArrow : ".slide_to_right" ,
        autoplay  : true ,
        autoplaySpeed : 1500
    }); 
  });

//   $(document).ready(function(){
//     $('.slider').product({
//         infinite: false,
//         slidesToShow: 4 ,
//         slidesToScroll: 1,
//         prevArrow : ".slide_to_left" , 
//         nextArrow : ".slide_to_right" ,
//         autoplay  : true ,
//         autoplaySpeed : 1500
//     }); 
//   });




  var menu_icone = document.querySelector('.bi-list')
  var menu_list = document.querySelector('nav .down_nav ul')

menu_icone.addEventListener('click' , function(){
    this.classList.toggle('open')

    menu_list.classList.toggle('open')

})



var openCart = document.querySelector('.fa-cart-shopping')
var cartItems = document.querySelector('.cart')
var clossCart = document.querySelector('.bi-rocket')


openCart.addEventListener('click' , function(){
    cartItems.classList.add('open')
})
clossCart.addEventListener('click' , function(){
    cartItems.classList.remove('open')
})