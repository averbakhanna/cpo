


// let ul_burger = document.querySelector('.ul_burger')

// document.querySelector('.burger').addEventListener('click', function(){
//   document.querySelector('.burger span').classList.toggle('active');
//   ul_burger.style.display= 'inline-block';
// })
$(document).ready(function(){
  $('.menu-tab').click(function(){
    $('.menu-hide').toggleClass('show');
    $('.menu-tab').toggleClass('active');
  });
  $('a').click(function(){
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
  });
});

var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

// function pauseSlideshow(){
//   pauseButton.innerHTML = '&#9658;'; // play character
//   playing = false;
//   clearInterval(slideInterval);
// }

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}

// pauseButton.onclick = function(){
//   if(playing){ pauseSlideshow(); }
//   else{ playSlideshow(); }
// };

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
  // pauseSlideshow();
  nextSlide();
};
previous.onclick = function(){
  // pauseSlideshow();
  previousSlide();
};
//popup////////
let inputOne = document.querySelector('.one_input')
let inputTwo = document.querySelector('.two_input')
let inputFree = document.querySelector('.free_input')
let sendBtn = document.querySelector('.send_info')
sendBtn.classList.add('activbtn')
function openPopup() {
    let startPopup = document.querySelector('.inner_popup')
    startPopup.style.display = 'block'
    
}
function closePopup() {
    let startPopup = document.querySelector('.inner_popup')
    startPopup.style.display = 'none'
}

function infoInput() {
    if (inputOne.value.length !== 0 && inputTwo.value.length !== 0 && inputFree.value.length !== 0 ) {
        sendBtn.removeAttribute('disabled')
        sendBtn.classList.remove('activbtn')
    } else {
        
    }
}

function send() {
    let information = JSON.stringify(inputOne.value + ' ' + inputTwo.value + ' ' + inputFree.value + ' квартира')
    console.log(information); 
}

//popup////////////////


// carousel/////////////////////////////////////////////


// const carouselSlide = document.querySelector('.carousel_slide')

// const carouselDiv = document.querySelector('.carousel_slide div')
// //butons
// const prevBtn = document.querySelector('#prevBtn')
// const nextBtn = document.querySelector('#nextBtn')
// //counter
// let counter = 1

// const size = carouselSlide.clientWidth
// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
// //button listeners
// nextBtn.addEventListener('click', function() {
//   carouselSlide.style.transition = "ransform 0.4 ease-in-out"
//   counter++
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

// } )
// prevBtn.addEventListener('click', function() {
//   carouselSlide.style.transition = "ransform 0.4 ease-in-out"
//   counter--
//   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

// } )
// // let cloneOne = document.querySelector('#cloneOne')
// // let cloneTwo = document.querySelector('#cloneTwo')

// carouselSlide.addEventListener('transitionend', () =>{
  
//   if(carouselDiv[counter].id === 'cloneOne'){
//     carouselSlide.style.transition = "none"
//     counter = carouselDiv.length - 2
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
//   }
//   if(carouselDiv[counter].id === 'cloneTwo'){
//     carouselSlide.style.transition = "none"
//     counter = carouselDiv.length - counter
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
//   }
// })
///////////////////////////4//
const tabsBtn   = document.querySelectorAll(".nav-btn")
const tabsItems = document.querySelectorAll(".tabs_page")

tabsBtn.forEach(onTabClick);
// главная function ================================
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active')
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active')
            });
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    });
}
document.querySelector('.nav-btn').click()


//popup////////
let inputOnee = document.querySelector('.one_inputt')
let inputTwoo = document.querySelector('.two_inputt')
let sendBtnn = document.querySelector('.send_infoo')
sendBtnn.classList.add('activbtnn')
function openPopupp() {
    let startPopup = document.querySelector('.inner_popupp')
    startPopup.style.display = 'block'
    
}
function closePopupp() {
    let startPopup = document.querySelector('.inner_popupp')
    startPopup.style.display = 'none'
}

function infoInputt() {
    if (inputOnee.value.length !== 0 && inputTwoo.value.length !== 0 ) {
        sendBtnn.removeAttribute('disabled')
        sendBtnn.classList.remove('activbtnn')
    } else {
        
    }
}

function send() {
    let information = JSON.stringify(inputOnee.value + ' ' + inputTwoo.value + ' ' )
    console.log(information); 
}
 


$(document).ready(function(){
  $('.fade').slick({
    dots: 0,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});


