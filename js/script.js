const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');

const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})

const activePage = () => {

    const header = document.querySelector('.header');
    const barBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    },1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barBox.classList.remove('active');
    setTimeout(() => {
        barBox.classList.add('active');
    },1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}
navLinks.forEach((link,idx) => {
    link.addEventListener('click',() =>{
        if (!link.classList.contains('active')){
            activePage();
            link.classList.add('active');

            setTimeout(()=>{
                sections[idx].classList.add('active');
            },1100);
        }
    })
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')){
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(()=>{
            sections[0].classList.add('active');
        },1100);
    }
});



const resumeBtns = document.querySelectorAll('.resume-btn'); // All buttons
const resumeDetails = document.querySelectorAll('.resume-details'); // All details

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        resumeBtns.forEach(button => button.classList.remove('active'));

        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Remove 'active' class from all details
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        // Add 'active' class to the corresponding detail
        if (resumeDetails[idx]) {
            resumeDetails[idx].classList.add('active');
        }
    });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-details');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 5) {
        index++;
        arrowLeft.classList.remove('disabled');
    } 
    if (index === 5) {
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    if (index === 0) {
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
