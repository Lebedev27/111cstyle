'use strict';

$(function() {
    $('.header__burger').click(function() {
        console.log($(this));
        $(this).toggleClass('js-isActive');
        $('.header__navigation').toggleClass('js-isActive');
    })
});

$(".js-OrderPopup").click(function() {
    $(".popup").addClass("js-popupIsOpened");
});
$(".popup__close").click(function() {
    if ($(".popup").hasClass("js-popupIsOpened")) $(".popup").removeClass("js-popupIsOpened");
});

var bannerSwiper = new Swiper('.index-banner__container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var partnerSlider = new Swiper('.partners__container', {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.partners__paginatio',
                clickable: true,
            },
            navigation: {
                nextEl: '.partners__button-next',
                prevEl: '.partners__button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 5,

                },
                635: {
                    slidesPerView: 3,
                    spaceBetween: 5,

                },
                479: {
                    slidesPerView: 1,
                    spaceBetween: 5,

                },
            },
        });
    })

})();


var expertSlider = new Swiper('.expert__container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.expert__button-next',
        prevEl: '.expert__button-prev',
    },
});

var stepsSlider = new Swiper('.calculator__container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.calculator__button-next',
        prevEl: '.calculator__button-prev',
    },
})

stepsSlider.on('slideChange', function() {
    if (stepsSlider.isEnd) {
        $('.calculator-pagination').css('display', 'none');
        $('.calculator__button-next').css('display', 'none');
        $('.calculator__button-prev').css('display', 'none');
    } else {
        $('.calculator__button-next').css('display', 'flex');
        $('.calculator__button-prev').css('display', 'flex');
        $('.calculator-pagination').css('display', 'block');
    }
})

var reviewSlider = new Swiper('.reviews__container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
    },
});
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var reviewSlider = new Swiper('.reviews__container', {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.partners__paginatio',
                clickable: true,
            },
            navigation: {
                nextEl: '.reviews__button-next',
                prevEl: '.reviews__button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 80,

                },
                635: {
                    slidesPerView: 1,
                    spaceBetween: 10,

                },
            },
        });
    })

})();


var accreditationSlider = new Swiper('.accreditation__container', {
    slidesPerView: 5,
    spaceBetween: -23,
    loop: true,
    navigation: {
        nextEl: '.accreditation__button-next',
        prevEl: '.accreditation__button-prev',
    },
});


$(".jss-dropDown").click(function() {
    if ($(this).children(".answer__down").hasClass("js-dropDowIsOpened")) { $(this).children(".answer__down").removeClass("js-dropDowIsOpened") } else { $(this).children(".answer__down").addClass("js-dropDowIsOpened") };
});

$(document).ready(function() {
    $('.fancybox').fancybox({
        protect: true,
        toolbar: false,
        hideOnContentClick: true
    })
});



(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var reviewTenderSlider = new Swiper('.reviews-tender__container', {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.partners__paginatio',
                clickable: true,
            },
            navigation: {
                nextEl: '.reviews-tender__button-next',
                prevEl: '.reviews-tender__button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 80,

                },
                635: {
                    slidesPerView: 1,
                    spaceBetween: 10,

                },
            },
        });
        let flag = false;
        const responsiveIcons = (breakpoint) => {
            if (breakpoint.matches === true && flag === false) {
                flag = true;

                const arrowPrev = document.querySelector('.steps__button-prev');
                const arrowNext = document.querySelector('.steps__button-next');
                const separator = document.querySelectorAll('.services__items-separator');
                const sliderContainer = document.querySelector('.steps__items');
                const sliderItem = document.querySelectorAll('.steps__item');
                const wrapper = document.querySelector('.steps__items .swiper-wrapper');

                arrowNext.style.display = 'flex';
                arrowPrev.style.display = 'flex';
                sliderContainer.classList.add('swiper-container');
                sliderContainer.style.width = '90%';
                wrapper.style.flexWrap = 'initial';
                wrapper.style.justifyContent = 'initial';

                [].forEach.call(separator, function (item) {
                    item.remove();
                });
                [].forEach.call(sliderItem, function (item) {
                    item.classList.add('swiper-slide');
                });

                const sliderBody = new Swiper(sliderContainer, {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.steps__button-next',
                        prevEl: '.steps__button-prev',
                    },
                    loop:true,
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 80,

                        },
                        635: {
                            slidesPerView: 2,
                            spaceBetween: 10,

                        },
                    },
                });
            }
        }
        window.addEventListener('resize', function () {

            responsiveIcons(window.matchMedia('(max-width: 840px)'));
        })
        responsiveIcons(window.matchMedia('(max-width: 840px)'));
    })

})();
