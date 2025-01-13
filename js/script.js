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
