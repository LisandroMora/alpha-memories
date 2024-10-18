const boxes = document.querySelectorAll('.box');
const counters = document.querySelectorAll('.counter');
const animations = document.querySelectorAll('.animation');
const milestonesItems = document.querySelectorAll('.milestones-item');
const confidenceItems = document.querySelectorAll('.confidence-item');

function isInViewPort(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0
    );
}
    
function toggleAnimationOnViewPort(el) {
    if(isInViewPort(el)) {
        el.classList.add('show');
    } else if (!el.classList.contains('box') && window.innerWidth > 768) {
        el.classList.remove('show');
    }
}

function makeCounterAnimation(el, from, to, duration) {
    const value = parseInt(el.innerHTML);
    if (value > 0 || value == to) return;

    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp; 
        const progress = timestamp - start;
        if (Math.floor(progress / duration * (to - from) + from) > 657){
            el.innerHTML = 657;
        }
        else{
            el.innerHTML = Math.floor(progress / duration * (to - from) + from);
        }
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

function makeCounterAnimationOnViewPort(el) {
    if(isInViewPort(el) && el.innerHTML == 0 && !el.classList.contains('show')) {
        el.classList.add('show');
        makeCounterAnimation(el, 0, el.dataset.counter, 2000);
    }
}

window.addEventListener('scroll', function() {
    
    if (document.getElementById('modal').classList.contains('show')) {
        document.getElementById('modal').classList.remove('show');
        document.querySelector('.modal video').pause();
    }

    counters.forEach(counter => {
        makeCounterAnimationOnViewPort(counter);
    })

    milestonesItems.forEach(milestone => {
        toggleAnimationOnViewPort(milestone);
    })

    confidenceItems.forEach(confidence => {
        toggleAnimationOnViewPort(confidence);
    })

    if (window.innerWidth < 768) {
        return;
    }
    
    boxes.forEach(card => {
        toggleAnimationOnViewPort(card);
    })
    
    animations.forEach(animation => {
        toggleAnimationOnViewPort(animation);
    })

});