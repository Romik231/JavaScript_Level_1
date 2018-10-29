
let loopInterval;   //Глобальный loop указатель
let loopCount = 1;  //Счетчик смены картинок
let timer = 2000;



function loopPics(images) {
    change_picture(loopCount, images[loopCount].src);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}




function init() {
    let images = document.querySelectorAll(".small_pictures img");
    for (i = 0; i < images.length; i++){
        images[i].addEventListener("click", change_picture);
    }

}
function change_picture(event) {
    let bigPicture = document.getElementById("big_picture");
    let clickPict = event.target;
    let src = clickPict.getAttribute("src");
    bigPicture.src = src;

    
}


/*function touchRightArrow() {
    
    let image = document.querySelectorAll(".small_pictures .slide"); //Собираем все картинки в массив
    for (i = 0; i < image.length; i++);
    image[i].addEventListener("click", nextSlide);
}
function nextSlide() {
let btnRight = document.getElementById("touch_right");
    btnRight.addEventListener("click")
}*/



let btnRight = document.getElementById("touch_right");
    let j = loopCount;
    btnRight.addEventListener("click", function() {
        change_picture(j++, images[j++].src);});
//******************************************************************* */
//let btnRight = document.getElementById("touch_left");
//let image = document.querySelectorAll(".small_pictures img");

//let slideInterval = setInterval(nextSlide,2000);
//****************************************************************** */



//******************************************************************* */
// function touchRight() {
//     image[currentSlide].className = 'slide';
//     currentSlide = (currentSlide + 1) % image.length;
//     image[currentSlide].className = 'slide show';
    
// }
    //**************************************************************


// function left() {
//     let i = 0;
//     let image = document.querySelectorAll(".small_pictures img");
//     i--;
//     if (i < 0) i = image.length - 1;
//     image.src = image[i];
// }
// function right() {
//     let i = 0;
//     let image = document.querySelectorAll(".small_pictures img");
//     i++;
//     if (i == image.length) i = 0;
//     image.src = image[i];
// }




window.onload = init;



