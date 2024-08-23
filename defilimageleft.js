const images = document.querySelectorAll('#defl img');

images.forEach((image, index) => {
    image.style.animationDelay = `${index * 7}s`;
});