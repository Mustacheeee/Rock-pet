// store every element with title cyber-img as array in cyberImgs
let cyberImgs = document.querySelectorAll(".cyber-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

// when click one img, see whole view. apply to all element in cyberImgs
if(cyberImgs){
    cyberImgs.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            // determent the pic and grab full version
            // get full url then break down
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("image/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', ''); // grab the 2nd part 
            
            getLatestOpenedImg = index + 1;
            // pop up the big pic
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "/img" + setNewImgUrl);
        }
    });

}
