// let currentIndex = 0;

// function scrollImages(direction) {
//     const classic = document.getElementById('classic');
//     const classicShoes = classic.querySelectorAll('.image');
//     const imageWidth = images[0].offsetWidth + 10;

//     currentIndex += direction;

//     if (currentIndex < 0) {
//         currentIndex = 0;
//     }else if (currentIndex >= images.lenght) {
//         currentIndex = images.lenght - 1;
//     }

//     const offset = -currentIndex * imageWidth;
//     imageScroller.style.transform = 'translateY(${offset}px)';
// }