$(document).ready(function () {

    // LOG IN FORM / SIGN UP FORM 
    const loginBtn = document.querySelector('#login-btn');
    const signUpBtn = document.querySelector('#signup-btn');


    loginBtn.addEventListener('click', () => {
        initModalById('login-modal');
    });
    signUpBtn.addEventListener('click', () => {
        initModalById('signup-modal');
    });

    function initModalById(id) {
        let modal = $('#' + id)
        $(modal).addClass('is-visible')
        $(modal).find('.modal-overlay ').addClass('modal-toggle')
        $('.modal-toggle').on('click', function (e) {
            e.preventDefault();
            $(modal).removeClass('is-visible');
        });

    }


    // Fixed header 
    setInterval(() => {

        if ($(document).scrollTop() > 50 && $(".nav").hasClass('fixed') == false) {
            $(".nav").toggleClass("fixed");

        } else if ($(document).scrollTop() < 50 && $(".nav").hasClass('fixed') == true) {
            $(".nav").toggleClass("fixed");
        }

    }, 100)

    // Burger menu

    $('.burger-btn').click(function () {

        if ($(this).hasClass('active')) {
            $('.burger-menu').removeClass('active')
            $('.burger-menu-bg').fadeOut()
        } else {
            $('.burger-menu').addClass('active')
            $('.burger-menu-bg').fadeIn()
        }
        $('.burger-btn').toggleClass('active')
    })
    $(window).click(function (e) {
        const target = e.target;
        if (!target.closest('.burger-btn') && !target.closest('.burger-menu')) {
            $('.burger-menu').removeClass('active');
            $('.burger-menu-bg').fadeOut();
            $('.burger-btn').removeClass('active')
        }

    });

});
