
/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
}); 

/*===== Link Active Work =====*/

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))

    this.classList.add('active-work')
}

    linkWork.forEach(l =>l.addEventListener('click' , activeWork))

/*===== Work Popup =====*/

document.addEventListener('click' , (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }

})

function togglePortfolioPopup(){
    document.querySelector('.portfolio__popup').classList.toggle("open");

}

document.querySelector('.portfolio__popup-close').addEventListener('click',togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector(".work__img").src ;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector(".work__title").innerHTML ;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML ;
}


/*=============== INPUT ANIMATION ===============*/

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus')
    }

}

inputs.forEach((input) => {
    input.addEventListener('focus' , focusFunc);
    input.addEventListener('blur' , blurFunc);
})



/*===============COUNT ===============*/


document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.count');
    const speed = 50; 

    const animateCount = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 50); 
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


/*===============MENU SHOW Y HIDDEN ===============*/

const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

/*===============MENU SHOW ===============*/

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===============MENU HIDDEN ===============*/

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY || window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560)
        scrollUp.classList.add('show-scroll'); 
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

// ***********************************
// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'uil-sun';

// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// const logoImg = document.querySelector('.logo__img');

// // Function to change logo based on theme
// const setLogoForTheme = (theme) => {
//     if (theme === 'dark') {
//         // Keep the logo as it is for dark theme
//     } else {
//         // Change logo for light theme
//         logoImg.src = 'assets/images/logo.png'; // مسار الشعار الأصلي هنا
//     }
// };

// // Function to get current theme
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// // Toggle dark mode with button click
// themeButton.addEventListener('click', () => {
//     // Toggle dark mode
//     document.body.classList.toggle(darkTheme);
    
//     // Set logo based on current theme after toggling
//     setLogoForTheme(getCurrentTheme());
    
//     // Save theme in localStorage
//     localStorage.setItem('selected-theme', getCurrentTheme());
// });

// // Check previously selected theme and set logo accordingly
// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//     setLogoForTheme(selectedTheme);
// }









  // /* =============== sticky navbar=========================== */

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


/*==================== EMAIL JS ====================*/


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_blo1bjg', 'template_frl9sza', this, 'lOXXClaBggsv1jD6w')
            .then(() => {
                document.getElementById('contact-msg').textContent = 'Message sent successfully !';
                setTimeout(() => {
                    document.getElementById('contact-msg').textContent = '';
                }, 5000);
                this.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}




/*=============== SERVICES MODAL ===============*/


    document.addEventListener('DOMContentLoaded', function() {
        const modalViews = document.querySelectorAll('.services__model'),
            modalBtns = document.querySelectorAll('.services__button'),
            modalCloses = document.querySelectorAll('.services__model-close');

        let modal = function(modalClick){
            modalViews[modalClick].classList.add('active-modal');
        }

        modalBtns.forEach((modelBtn, i) => {
            modelBtn.addEventListener('click', () => {
                modal(i);
            });
        });

        modalCloses.forEach((modalClose) => {
            modalClose.addEventListener('click', () => {
                modalViews.forEach((modalView) => {
                    modalView.classList.remove('active-modal');
                });
            });
        });
    });



    
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 1000, // تقليل مدة التحريك
//     reset: false   // عدم إعادة التحريك عند التمرير
// });

// // كشف العناصر الأخرى
// sr.reveal(`.home__data, .home__img,
//             .about__data, .about__img,
//             .menu__content,
//             .app__data, .app__img,
//             .contact__data, .contact__button,
//             .footer__content`, {
//     interval: 200
// });




const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}




// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.header');
//     var logo = document.querySelector('.header .nav img');
    
//     if (window.scrollY > 50) {
//         header.classList.add('scroll-header');
//         logo.src = 'assets/images/logo.png'; // ضع مسار صورة الشعار الجديدة هنا
//     } else {
//         header.classList.remove('scroll-header');
//         logo.src = 'assets/images/logooooo.png'; // ضع مسار صورة الشعار الأصلية هنا
//     }
// });



// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.header');
//     var logo = document.querySelector('.header .nav img');
    
//     if (window.scrollY > 50 && !document.body.classList.contains('dark-theme')) {
//         header.classList.add('scroll-header');
//         logo.src = 'assets/images/logo.png'; // مسار صورة الشعار الجديدة في الوضع الفاتح
//     } else {
//         header.classList.remove('scroll-header');
//         logo.src = 'assets/images/logooooo.png'; // مسار صورة الشعار الأصلية
//     }
// });


// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'uil-sun';

// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// const logoImg = document.querySelector('.logo__img');

// // Function to change logo based on theme
// const setLogoForTheme = (theme) => {
//     if (theme === 'dark') {
//         // Keep the logo as it is for dark theme
//     } else {
//         // Change logo for light theme
//         logoImg.src = 'assets/images/logo.png'; // مسار الشعار الأصلي هنا
//     }
// };

// // Function to get current theme
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// // Toggle dark mode with button click
// themeButton.addEventListener('click', () => {
//     // Toggle dark mode
//     document.body.classList.toggle(darkTheme);
    
//     // Set logo based on current theme after toggling
//     setLogoForTheme(getCurrentTheme());
    
//     // Save theme in localStorage
//     localStorage.setItem('selected-theme', getCurrentTheme());
// });

// // Check previously selected theme and set logo accordingly
// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//     setLogoForTheme(selectedTheme);
// }


// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.header');
//     var logo = document.querySelector('.header .nav img');
    
//     if (window.scrollY > 50) {
//         header.classList.add('scroll-header');
//         if (!document.body.classList.contains('dark-theme')) {
//             logo.src = 'assets/images/logo.png'; // مسار صورة الشعار الجديدة في الوضع الفاتح
//         }
//     } else {
//         header.classList.remove('scroll-header');
//         if (!document.body.classList.contains('dark-theme')) {
//             logo.src = 'assets/images/logooooo.png'; // مسار صورة الشعار الأصلية
//         }
//     }
// });

window.addEventListener('scroll', function() {
    if (window.innerWidth < 768) {
        return; // إذا كان عرض الشاشة أقل من 768 بكسل، لا يتم تنفيذ باقي الكود
    }

    var header = document.querySelector('.header');
    var logo = document.querySelector('.header .nav img');
    
    if (window.scrollY > 50) {
        header.classList.add('scroll-header');
        if (!document.body.classList.contains('dark-theme')) {
            logo.src = 'assets/images/logo.png'; // مسار صورة الشعار الجديدة في الوضع الفاتح
        }
    } else {
        header.classList.remove('scroll-header');
        if (!document.body.classList.contains('dark-theme')) {
            logo.src = 'assets/images/logooooo.png'; // مسار صورة الشعار الأصلية
        }
    }
});

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const logoImg = document.querySelector('.logo__img');

// Function to change logo based on theme
const setLogoForTheme = (theme) => {
    if (theme === 'dark') {
        // Keep the logo as it is for dark theme
        logoImg.src = 'assets/images/logooooo.png'; // مسار الشعار الأصلي هنا

    } else {
        // Change logo for light theme
        logoImg.src = 'assets/images/logo.png'; // مسار الشعار الأصلي هنا
    }
};

// Function to get current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Toggle dark mode with button click
themeButton.addEventListener('click', () => {
    // Toggle dark mode
    document.body.classList.toggle(darkTheme);
    
    // Set logo based on current theme after toggling
    setLogoForTheme(getCurrentTheme());
    
    // Save theme in localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
});

// Check previously selected theme and set logo accordingly
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    setLogoForTheme(selectedTheme);
}
