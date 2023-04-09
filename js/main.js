const swiper = new Swiper('.home-cat .swiper', {

    slidesPerView: 3,
    spaceBetween: 15,
    loop: false,
    slidesPerGroup: 3,
    // Navigation arrows
    navigation: {
        nextEl: '.home-cat__next',
        prevEl: '.home-cat__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    }
});