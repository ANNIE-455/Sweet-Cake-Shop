document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Selectors ---
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('#menu-bar');
    
    const search = document.querySelector('.search');
    const searchBtn = document.querySelector('#search');
    
    const loginBtn = document.querySelector('#login-btn');
    const loginContainer = document.querySelector('.login-form-container');
    const closeLoginBtn = document.querySelector('#close-login-btn');
    
    const signInLink = document.querySelector('.signInBtn-link');
    const signUpLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');

    // --- Navigation Menu Toggle ---
    if (menuBtn && navbar) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            if (search) search.classList.remove('active');
            if (loginContainer) loginContainer.classList.remove('active');
        };
    }

    // --- Search Bar Toggle ---
    if (searchBtn && search) {
        searchBtn.onclick = () => {
            search.classList.toggle('active');
            if (navbar) navbar.classList.remove('active');
            if (loginContainer) loginContainer.classList.remove('active');
        };
    }

    // --- Open Login Modal ---
    if (loginBtn && loginContainer) {
        loginBtn.onclick = () => {
            loginContainer.classList.add('active');
            if (navbar) navbar.classList.remove('active');
            if (search) search.classList.remove('active');
        };
    }

    // --- Close Login Modal ---
    if (closeLoginBtn && loginContainer) {
        closeLoginBtn.onclick = () => {
            loginContainer.classList.remove('active');
        };
    }

    // --- Switch to Sign Up Panel ---
    if (signUpLink && wrapper) {
        signUpLink.onclick = (e) => {
            e.preventDefault();
            wrapper.classList.add('active');
        };
    }

    // --- Switch to Sign In Panel ---
    if (signInLink && wrapper) {
        signInLink.onclick = (e) => {
            e.preventDefault();
            wrapper.classList.remove('active');
        };
    }

    // --- Close Elements on Window Scroll ---
    window.onscroll = () => {
        if (navbar) navbar.classList.remove('active');
        if (search) search.classList.remove('active');
    };

    // --- Swiper Sliders Initialization ---
    
    // 1. Products Row
    new Swiper(".product-row", {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    // 2. Blogs Row
    new Swiper(".blogs-row", {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
        },
    });

    // 3. Reviews Row
    new Swiper(".review-row", {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});