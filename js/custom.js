
//===========배너이미지 슬라이드

let slideIdx = 1;

bannerSlides(slideIdx);

function bannerSlides(n){
    console.log(n)

    const imgs = document.querySelectorAll(".mainPic > li");

    if(n > imgs.length){slideIdx = 1}

    if(n < 1){slideIdx = imgs.length};

    imgs.forEach(slide => slide.style.display = "none")

    imgs[slideIdx-1].style.display = "block"
}

function mainSlide(n){
    bannerSlides(slideIdx += n);
}

//============클리닉 프로그램 슬라이드

let slides = document.querySelector(".slide > .wrap")
let slide = document.querySelectorAll(".slide li")
let currnetIndex = 0
let slideCount = slide.length
let slideWidth = slide[0].scrollWidth;
let slideMargin = parseFloat(window.getComputedStyle(slide[0]).getPropertyValue("margin-right"));
console.log(slideMargin)
let prevBtn = document.querySelector(".tub > .cp_btn > .prev")
let nextBtn = document.querySelector(".tub > .cp_btn > .next")

slides.style.width = (slideWidth + slideMargin)*slideCount + 'px';

function moveSlide(num){
    slides.style.transform = `translateX(${-num * (slideWidth + slideMargin)}px)`;
    currnetIndex = num;
}
nextBtn.addEventListener('click', function(){
    if(currnetIndex < slideCount-4 ){
        moveSlide(currnetIndex + 1);
    }
});
prevBtn.addEventListener('click', function(){
    if(currnetIndex > 0){
        moveSlide(currnetIndex - 1);
    }
})


//============커뮤니티 탭

const tabBtn = document.querySelectorAll('.noticeBtn > button');

const tabContents = document.querySelectorAll('.boardContents > li');

notice(0)

tabBtn.forEach((tab,index) => tab.addEventListener('click',function(){
    notice(index)
}))

function notice(n){

    tabBtn.forEach(tab => tab.classList.remove('on'))
    
    tabContents.forEach(content => content.style.display='none')
    
    tabBtn[n].classList.add('on')
    
    tabContents[n].style.display = "block"
}

//===============커뮤니티탭의 갤러리

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n){
    console.log(n)

    const imgs = document.querySelectorAll(".gallery");

    if(n > imgs.length){slideIndex = 1}

    if(n < 1){slideIndex = imgs.length};

    imgs.forEach(slide => slide.style.display = "none")

    imgs[slideIndex-1].style.display = "block"
}

function plusSlide(n){
    showSlides(slideIndex += n);
}