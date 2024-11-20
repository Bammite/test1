document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#defl img'); // Récupérer toutes les images
    const duration = 7; // La durée de l'animation en secondes

    // Appliquer un délai d'animation à chaque image
    images.forEach((image, index) => {
        image.style.animationDelay = `${index * duration}s`;
    });

    // Fonction pour redémarrer l'animation
    function restartAnimation() {
        images.forEach(img => {
            img.classList.remove('aniamImg'); // Retirer la classe pour réinitialiser l'animation
            void img.offsetWidth;  // Force un reflow pour redémarrer l'animation
            img.classList.add('aniamImg');  // Ajouter la classe pour redémarrer l'animation
        });
    }

    // Ajouter la classe d'animation initiale
    images.forEach(img => {
        img.classList.add('aniamImg');
    });

    // Écouter la fin de l'animation de la dernière image et redémarrer
    images[images.length - 1].addEventListener('animationend', function () {
        restartAnimation();
    });
});
