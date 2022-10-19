 const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;
let typeName = document.getElementById('recipe-type');
let recipePlace = typeName.innerText;


typeName.innerText = "BREAKFAST FUN";
typeName.addEventListener('click', e => {
    e.preventDefault();
    location.href = '#breakfast-part';
})

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
    // Add content link to each slide
    if(slides[0].classList.contains('current')) {
        typeName.innerText = "BREAKFAST FUN";
        typeName.addEventListener('click', e => {
            e.preventDefault();
            location.href = '#breakfast-part';
        })
    } else if(slides[1].classList.contains('current')) {
        typeName.innerText = "LUNCH FOR US";
        typeName.addEventListener('click', e => {
            e.preventDefault();
            location.href = '#lunch-part';
        })
    } else {
        typeName.innerText = "SNACK TIME"; 
        typeName.addEventListener('click', e => {
            e.preventDefault();
            location.href = '#snack-part';
        }) 
    };
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
    // Add content link to each slide
    if(slides[0].classList.contains('current')) {
        typeName.innerText = "BREAKFAST FUN";
        typeName.addEventListener('click', e => {
            e.preventDefault();
            location.href = '#breakfast-part';
        })
    } else if(slides[1].classList.contains('current')) {
        typeName.innerText = "LUNCH FOR US";
        typeName.addEventListener('click', e => {
            e.preventDefault();
            location.href = '#lunch-part';
        })
    } else {
        typeName.innerText = "SNACK TIME"; 
        typeName.addEventListener('click', e => {
            e.preventDefault();
            location.href = '#snack-part';
        }) 
    };
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime); 
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    } 
});

// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime); 
};

// Make subscribe button work
const email = document.getElementById('email');
const text = document.getElementById('after-subscribe');
const signUp = document.getElementById('sign-up')
signUp.addEventListener('click', e => {
    e.preventDefault();
    email.style.display = "none";
    text.style.display = "block"; 
    signUp.style.display = "none";
    return false;
});