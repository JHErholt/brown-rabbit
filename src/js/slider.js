var currentSlide = 1;

var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");

var quote1 = document.querySelector(".quote-1");
var quote2 = document.querySelector(".quote-2");
var quote3 = document.querySelector(".quote-3");

function nextSlide() {
    currentSlide++
    if (currentSlide == 4) {
        currentSlide = 1
    }
    swapSlide()
    swapQuote()
}
function previousSlide() {
    currentSlide--
    if (currentSlide == 0) {
        currentSlide = 3
    }
    swapSlide()
    swapQuote()
}
function swapQuote() {
    switch (currentSlide) {
        case 1:
            quote2.style.opacity = "0"
            quote3.style.opacity = "0"
            setTimeout(() => {
                quote2.style.display = "none"
                quote3.style.display = "none"
                quote1.style.display = "unset"
                setTimeout(() => {
                    quote1.style.opacity = "1"
                }, 100)
            }, 400)
            break
        case 2:
            quote1.style.opacity = "0"
            quote3.style.opacity = "0"
            setTimeout(() => {
                quote1.style.display = "none"
                quote3.style.display = "none"
                quote2.style.display = "unset"
                setTimeout(() => {
                    quote2.style.opacity = "1"
                }, 100)
            }, 400)
            break
        case 3:
            quote1.style.opacity = "0"
            quote2.style.opacity = "0"
            setTimeout(() => {
                quote1.style.display = "none"
                quote2.style.display = "none"
                quote3.style.display = "unset"
                setTimeout(() => {
                    quote3.style.opacity = "1"
                }, 100)
            }, 400)
            break
    }
}
function swapSlide() {
    switch (currentSlide) {
        case 1:
            slide1.style.left = "0"
            slide2.style.left = "0"
            slide3.style.left = "0"
            break
        case 2:
            slide1.style.left = "-100%"
            slide2.style.left = "-100%"
            slide3.style.left = "-100%"
            break
        case 3:
            slide1.style.left = "-200%"
            slide2.style.left = "-200%"
            slide3.style.left = "-200%"
            break
    }
}