
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
//         slidesToScrol: 1,
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
var cartContainer = document.querySelector('.cart .container')
var AmountCart = document.querySelector('.amount')
var TotalPrice = document.querySelector('.TOTAL')



openCart.addEventListener('click' , function(){
    cartItems.classList.add('open')
})
clossCart.addEventListener('click' , function(){
    cartItems.classList.remove('open')
})




var products =[
    {
        id : 1 , 
        img : "images/plate-1.png" , 
        name : "products One" , 
        price : 32.2,
    },
    {
        id :2 , 
        img : "images/plate-2.png" , 
        name : "products two" , 
        price : 88.12,
    },
    {
        id : 3 , 
        img : "images/plate-3.png" , 
        name : "products three" , 
        price : 30,
    },
    {
        id : 4 , 
        img : "images/plate-1.png" , 
        name : "products four" , 
        price : 12.88,
    },
    {
        id : 5 , 
        img : "images/salad-table.jpg" , 
        name : "products fiver" , 
        price : 15,
    },
    {
        id : 6 , 
        img : "images/coffee.jpg" , 
        name : "products six" , 
        price : 22,
    },
    {
        id : 7 , 
        img : "images/cupcake.png" , 
        name : "products seven" , 
        price : 120.1,
    },
    {
        id : 8 , 
        img : "images/plate-1.png" , 
        name : "products eghit" , 
        price : 60,
    },
    {
        id : 9 , 
        img : "images/plate-2.png" , 
        name : "products none" , 
        price : 90,
    },
    {
        id : 10 , 
        img : "images/plate-3.png" , 
        name : "products tin" , 
        price : 100,
    }
]

var productsContainer = document.querySelector('.container_products')

function SetItemaHTML(){
    var items = ''
    for(var i=0 ; i<products.length ; i++){
        items += `
        <div class="card_one">
            <img src=${products[i].img}>
                <div class="card_detalise">
                    <b>${products[i].name}</b>
                    <p>${products[i].price}</p>
                    <button onclick="AddToCard(${i})">Add To Card</button>
                </div>
        </div>
        `
    }
    productsContainer.innerHTML=items
    
} 
SetItemaHTML()


let cart=[]
function AddToCard(number){
    cart.push(products[number])
    console.log(cart);
    

    DisplayProducts()
}

function DisplayProducts(){
    var items =''
    total = 0
    cart.map(  (value , index)=>{
        total += value.price
        return items += `
         <div class="card">
            <img src="${value.img}">
            <div>
                <b>${value.name}</b>
                <p>[ ${value.price}]</p>
            </div>
            <div>
                <button>+</button>
                <span>0</span>
                <button>-</button>
                <b onclick="deleteProducts(${index})" class="bi bi-trash3"></b>
            </div>
        </div>
        `
    })

    TotalPrice.innerHTML=total.toFixed(2)
    if(cart.length>0){
        cartContainer.innerHTML = items
        AmountCart.style.color= '#fff'
        AmountCart.style.backgroundColor= 'red'

    }
    else{
        cartContainer.innerHTML = 'Your Cart Is Empty'
        cartContainer.style.textAlign= 'center'

        cartContainer.style.fontSize= '18px'
    }
    AmountCart.innerHTML = cart.length
}
DisplayProducts()


function deleteProducts(Number){    
            cart.splice(Number , 1)
    DisplayProducts()
}




