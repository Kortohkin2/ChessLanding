let slideIndex = 1;
const slides = document.querySelectorAll('.slide--media'),
    slidesSecond = document.querySelectorAll('.slide--media--2'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    prevSecond = document.querySelector('.prev--2'),
    nextSecond = document.querySelector('.next--2'),
    current = document.querySelector('.current'),
    total = document.querySelector('.total'),
    dots = document.querySelectorAll('.dot');
showSlides(slideIndex);
showSlidesSecond(slideIndex);
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';
}
function showSlidesSecond(n) {
    if (n > slidesSecond.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesSecond.length;
    }
    slidesSecond.forEach((item) => item.style.display = 'none');

    slidesSecond[slideIndex - 1].style.display = 'block';
    if (slides.length < 10) {
        current.textContent =  `${slideIndex}`;
    } else {
        current.textContent =  `slideIndex`;
    }
    total.textContent = `${slidesSecond.length}` ;
}
function plusSlides (n) {
    showSlides(slideIndex += n);
}
function plusSlidesSecond (n) {
    showSlidesSecond(slideIndex += n);
}

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});
prevSecond.addEventListener('click', function(){
    plusSlidesSecond(-1);
});

nextSecond.addEventListener('click', function(){
    plusSlidesSecond(1);
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    type: 'fraction',
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    }
});
