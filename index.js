//Access HTML elements
let carouselRow = document.querySelector('.slides-row');
const slides = document.querySelectorAll('.slide');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
console.log(carouselRow);
console.log(dots)


let currentIndex = 0 ;

// Function to change slides

function goToSlide(index){
    index =index % dots.length;
   carouselRow.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index ;
   
        for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");
        }

    dots[currentIndex].classList.add("active");

}

// Go to next slide

nextBtn.addEventListener('click' , nextSlide);

function nextSlide () {
    if (currentIndex < slides.length - 1){
        goToSlide (currentIndex + 1);
    }else{
        goToSlide(0);
    }
}

// Go to previous slide

prevBtn.addEventListener("click" , prevSlide);

function prevSlide(){
    if (currentIndex > 0){
        goToSlide (currentIndex - 1);
    }
    else{
        goToSlide(slides.length - 1);
    }
}

// Adding pagination

for(let i = 0 ; i<dots.length ; i++){
    dots[i].addEventListener("click" , ()=>{
        goToSlide(i)
    });
}

// Autoplay

setInterval(()=>{
    goToSlide(currentIndex + 1);
},2000)

goToSlide (0);
