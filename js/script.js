const resumeBtn = document.querySelectorAll('.resume-btn');

resumeBtn.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        resumeBtn.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    });
});