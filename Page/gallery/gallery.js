const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragState = false, prevPageX, prevScrollLeft;

const showHideIcons = () => {
    // showing and hiding prev/next icon when reach the end
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // get max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth? "none" : "block";

}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if click icon is left, reduce width value from the carousel scroll left else add to it
        if(icon.id == "left") {
            carousel.scrollLeft -= 500;
        } else {
            carousel.scrollLeft += 500;
        }
        setTimeout(() => showHideIcons(), 60); // call showHideIcons after 60ms
    });
});

const dragStart = (e) => {
    // update vars when mouse down
    isDragState = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    // give num of px of element content that is scrolled horizontally
    prevScrollLeft = carousel.scrollLeft;

}
const dragging = (e) => {
    // scrolling imgs to left by mouse pointer
    if(!isDragState) return;
    e.preventDefault();
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragState = false;
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

// for moble version
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("touchend", dragStop);