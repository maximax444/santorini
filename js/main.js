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
        601: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            effect: 0,
            spaceBetween: 14
        },
        // when window width is >= 640px
        1101: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            effect: 0,
            spaceBetween: 15
        }
    }
});
const swiper2 = new Swiper('.home-rev__wrap > .swiper', {

    slidesPerView: 2,
    spaceBetween: 16,
    loop: false,
    slidesPerGroup: 2,
    effect: "coverflow",
    // Navigation arrows
    navigation: {
        nextEl: '.home-rev__next',
        prevEl: '.home-rev__prev',
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
        601: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            effect: 0,
            spaceBetween: 14
        },
        // when window width is >= 640px
        1101: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            effect: 0,
            spaceBetween: 16
        }
    }
});
const swiper3 = new Swiper('.home-rev__cont > .swiper', {

    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    effect: "coverflow",
    // Navigation arrows
    navigation: {
        nextEl: '.home-rev__next',
        prevEl: '.home-rev__prev',
    }
});
const swiper4 = new Swiper('.home-ab__img > .swiper', {
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    speed: 700,
    effect: "fade",
    autoplay: {
        delay: 3000,
    }
});
const swiper5 = new Swiper('.home-ab__prev > .swiper', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 4000,
    }
});
$('.header__burg').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__right').toggleClass('active');
});
$('.header__menu a').on('click', function () {
    $('.header__burg').removeClass('active');
    $('.header__right').removeClass('active');
});
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 50;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
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
$('.overlay-thx__btn').on('click', function (e) {
    e.preventDefault();
    $('.overlay-thx').removeClass('overlay-active');
    $('body').css('overflow', 'visible');
});
$('.overlay-thx').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-thx').removeClass('overlay-active');
    }
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});
$('.home-cat__btn, .main__btn, .footer__btn').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
(function ($) {
    $(function () {

        $('.gal__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.gal').find('.gal__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

const sw1 = new Swiper('.sw1', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const sw2 = new Swiper('.sw2', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const sw3 = new Swiper('.sw3', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const sw4 = new Swiper('.sw4', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const sw5 = new Swiper('.sw5', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const sw6 = new Swiper('.sw6', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const sw7 = new Swiper('.sw7', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const sw8 = new Swiper('.sw8', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
const swiper9 = new Swiper('.main__slider', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 4000,
    }
});
const swiper10 = new Swiper('.home-portf .swiper', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    effect: "fade"
});
swiper9.on("slideChange", function (e) {
    $('.main__tabs .active').removeClass('active');
    $('.main__tabs a').eq(e.activeIndex % 5 - 1).addClass('active');
    $('.main__prev').find('img').attr('src', $('.main__tabs a').eq(e.activeIndex % 5 - 1).attr('data-prev'));
    console.log(e.activeIndex)
});
(function ($) {
    $(function () {

        $('.main__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            $('.main__prev').find('img').attr('src', $(this).attr('data-prev'));
            swiper9.slideTo($(this).index() + 1);
        });

    });
})(jQuery);
let instanceNestedSlider = [sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8];
$('.gal__prev').on('click', function () {
    instanceNestedSlider[$(this).closest('.gal__cont-block').index()].slideNext();
});
$('.gal__right .left').on('click', function () {
    instanceNestedSlider[$(this).closest('.gal__cont-block').index()].slidePrev();
});
$('.gal__right .right').on('click', function () {
    instanceNestedSlider[$(this).closest('.gal__cont-block').index()].slideNext();
});
for (var i = 0; i < instanceNestedSlider.length; i++) {
    instanceNestedSlider[i].on("slideChange", function (e) {

        if ($(e.el).find('.swiper-slide-next').next('.swiper-slide').length) {
            $(e.el).closest('.gal__cont-block').find('.gal__prev img').attr('src', $(e.el).find('.swiper-slide-next').next('.swiper-slide').find('img').attr('src'))
        } else {
            $(e.el).closest('.gal__cont-block').find('.gal__prev img').attr('src', $(e.el).find('.swiper-slide').eq(2).find('img').attr('src'))
        }


        console.log(e.previousIndex - e.activeIndex);
    });
}
$('.preloader__img').addClass('active');
setTimeout(function () {
    $('.preloader').addClass('active');
}, 2000);
setTimeout(function () {
    $('.preloader').hide();
}, 3000);
function noWw(event) {
    if ("1234567890+\(\)\- ".indexOf(event.key) != -1) {

    } else {
        event.preventDefault();
    }

}