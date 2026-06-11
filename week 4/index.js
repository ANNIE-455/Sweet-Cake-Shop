document.addEventListener('DOMContentLoaded', () => {
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

    // Looks for the specific text element we added in HTML
    const strengthIndicator = document.querySelector('#password-strength');
    // Looks for the password input box
    const passwordInput = document.querySelector('input[type="password"]');
    // Looks for the form inside your modal wrapper
    const signupForm = document.querySelector('.wrapper form');


    // --- EXISTING EVENT HANDLERS ---
    if (menuBtn && navbar) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            if (search) search.classList.remove('active');
            if (loginContainer) loginContainer.classList.remove('active');
        };
    }

    if (searchBtn && search) {
        searchBtn.onclick = () => {
            search.classList.toggle('active');
            if (navbar) navbar.classList.remove('active');
            if (loginContainer) loginContainer.classList.remove('active');
        };
    }

    if (loginBtn && loginContainer) {
        loginBtn.onclick = () => {
            loginContainer.classList.add('active');
            if (navbar) navbar.classList.remove('active');
            if (search) search.classList.remove('active');
        };
    }

    if (closeLoginBtn && loginContainer) {
        closeLoginBtn.onclick = () => {
            loginContainer.classList.remove('active');
        };
    }

    if (signUpLink && wrapper) {
        signUpLink.onclick = (e) => {
            e.preventDefault();
            wrapper.classList.add('active');
        };
    }

    if (signInLink && wrapper) {
        signInLink.onclick = (e) => {
            e.preventDefault();
            wrapper.classList.remove('active');
        };
    }

    window.onscroll = () => {
        if (navbar) navbar.classList.remove('active');
        if (search) search.classList.remove('active');
    };


    // --- WEEK 3: FIG 2 - FIXED PASSWORD STRENGTH CHECKER ---
    if (passwordInput && strengthIndicator) {
        passwordInput.addEventListener('input', () => {
            const val = passwordInput.value;
            
            if (val.length === 0) {
                strengthIndicator.textContent = '';
                return;
            }

            // Conditions
            const hasLength = val.length >= 8;
            const hasCaps = /[A-Z]/.test(val);
            const hasNumbers = /[0-9]/.test(val);

            // Live updates
            if (hasLength && hasCaps && hasNumbers) {
                strengthIndicator.textContent = 'Strength: Strong 💪';
                strengthIndicator.style.color = 'green';
            } else if (val.length >= 5) {
                strengthIndicator.textContent = 'Strength: Medium ⚠️';
                strengthIndicator.style.color = 'orange';
            } else {
                strengthIndicator.textContent = 'Strength: Too Weak ❌';
                strengthIndicator.style.color = 'red';
            }
        });
    }


    // --- WEEK 3: FIG 1 - FIXED JAVASCRIPT FORM VALIDATION ---
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            const emailInput = signupForm.querySelector('input[type="email"]');
            const passwordVal = passwordInput ? passwordInput.value : '';
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailInput && !emailPattern.test(emailInput.value)) {
                e.preventDefault(); 
                alert('Form Validation Error: Please enter a valid email address.');
                return;
            }

            if (passwordVal.length < 6) {
                e.preventDefault(); 
                alert('Form Validation Error: Password must be at least 6 characters long.');
                return;
            }

            alert('Form validation passed successfully!');
        });
    }


    // --- EXISTING SWIPER INITIALIZATIONS ---
    if (document.querySelector('.product-row')) {
        new Swiper(".product-row", {
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: { delay: 9500, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }

    if (document.querySelector('.blogs-row')) {
        new Swiper(".blogs-row", {
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: { delay: 9500, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            },
        });
    }

    if (document.querySelector('.review-row')) {
        new Swiper(".review-row", {
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: { delay: 9500, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }
});
// ── PASSWORD STRENGTH CHECKER ─────────────────────────────────────────────────
function checkStrength(password) {
  const fill  = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');

  let score = 0;
  if (password.length >= 8)               score++;
  if (/[A-Z]/.test(password))             score++;
  if (/[0-9]/.test(password))             score++;
  if (/[^A-Za-z0-9]/.test(password))      score++;

  if (password.length === 0) {
    fill.style.width      = '0%';
    fill.style.background = 'transparent';
    label.textContent     = '';
    label.style.color     = '';
    return;
  }

  if (score <= 1) {
    fill.style.width      = '33%';
    fill.style.background = '#ff5f5f';
    label.textContent     = 'Weak';
    label.style.color     = '#ff5f5f';
  } else if (score === 2 || score === 3) {
    fill.style.width      = '66%';
    fill.style.background = '#f0c040';
    label.textContent     = 'Medium';
    label.style.color     = '#f0c040';
  } else {
    fill.style.width      = '100%';
    fill.style.background = '#c8f060';
    label.textContent     = 'Strong';
    label.style.color     = '#c8f060';
  }
}