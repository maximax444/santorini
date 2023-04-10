const swiper = new Swiper('.home-cat .swiper', {

    slidesPerView: 3,
    spaceBetween: 15,
    loop: false,
    slidesPerGroup: 3,
    effect: "coverflow",
    // Navigation arrows
    navigation: {
        nextEl: '.home-cat__next',
        prevEl: '.home-cat__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            effect: "coverflow",
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            effect: 0,
            spaceBetween: 15
        }
    }
});
$('.header__burg').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__right').toggleClass('active');
});
$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".header__menu"); // тут указываем ID элемента
    var div2 = $(".header__contact");
    var div3 = $(".header__burg");
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && !div2.is(e.target) // если клик был не по нашему блоку
        && div2.has(e.target).length === 0 && !div3.is(e.target) // если клик был не по нашему блоку
        && div3.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.header__burg').removeClass('active');
        $('.header__right').removeClass('active');
    }
});