document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progress-bar');
    
    let currentSlide = 0;
    
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            
            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index < currentSlide) {
                slide.classList.add('prev');
            }
        });
        
        // Update buttons
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === slides.length - 1;
        
        // Update progress bar
        const progress = ((currentSlide + 1) / slides.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Initial state
    updateSlides();
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlides();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    });
    
    // Keyboard and Presenter Remote navigation
    document.addEventListener('keydown', (e) => {
        // Next slide: Right Arrow, Down Arrow, Page Down, Space, or Enter
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'Enter') {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlides();
            }
        } 
        // Previous slide: Left Arrow, Up Arrow, Page Up, or Backspace
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Backspace') {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlides();
            }
        }
    });
});
