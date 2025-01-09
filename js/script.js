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
