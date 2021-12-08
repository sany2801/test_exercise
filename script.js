const close = document.querySelector('.close')
const popap = document.querySelector('.wrapperpopap')
const adjust = document.querySelector('.adjust')
const menuButton = document.querySelector('.menu-button')
const mobileMenu = document.querySelector('.mobile-menu')
const checkboxoff = document.querySelector('.checkboxoff')

// menuButton.addEventListener('click', () =>{
//     mobileMenu.style.display = "block"
// })
adjust.addEventListener('click', () =>{
    popap.style.display = "block"
})
close.addEventListener('click', () =>{
    popap.style.display = "none"
})


const checkbox = () => {
    menuButton.addEventListener('click', () =>{
        if(menuButton.checked === true){
         mobileMenu.style.display = "block"
        }else{
         mobileMenu.style.display = "none"
        }
    })
    }

checkbox()