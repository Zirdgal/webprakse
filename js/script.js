const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const toggleAutoBtn = document.getElementById('toggleAutoBtn');

let currentSlide = 1;
let isPlaying = true;
let slideInterval = 5000; // ms


function nextSlide() {
    let currentSlideTag = document.getElementById(`carousel-${currentSlide}`)
    currentSlideTag.classList.remove("active");

    if (currentSlide == 5) {
        currentSlide = 1;
    } else {
        currentSlide += 1;
    }

    currentSlideTag = document.getElementById(`carousel-${currentSlide}`)
    currentSlideTag.classList.add("active");
}
function prevSlide() {
    let currentSlideTag = document.getElementById(`carousel-${currentSlide}`)
    currentSlideTag.classList.remove("active");

    if (currentSlide == 1) {
        currentSlide = 5;
    } else {
        currentSlide -= 1;
    }

    currentSlideTag = document.getElementById(`carousel-${currentSlide}`)
    currentSlideTag.classList.add("active");
}




nextBtn.addEventListener("click",nextSlide); 

prevBtn.addEventListener("click",prevSlide); 
toggleAutoBtn.addEventListener("click", function() {
    if (isPlaying == true) {
        isPlaying = false;
        toggleAutoBtn.textContent = "Turpināt";
    } else {
        isPlaying = true;
        toggleAutoBtn.textContent = "Apturēt";

    }
});

setInterval(() => {
    if (isPlaying == true) {
        nextSlide()
    }
}, slideInterval);


// while (isPlaying == true) {
//     setTimeout(nextSlide, 5000);
// }
