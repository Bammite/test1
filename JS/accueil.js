


// Récupérer les boutons et les blocs
const buttons = document.querySelectorAll('.boutons button');
const blocs = document.querySelectorAll('.service-container');

// Fonction pour afficher le bloc sélectionné
function afficherBloc(selectedId) {
    // Cacher tous les blocs
    blocs.forEach(bloc => {
        bloc.style.display = 'none';
    });
    
    // Enlever la classe 'selected' de tous les boutons
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    
    // Afficher le bloc sélectionné
    document.getElementById(selectedId).style.display = 'flex';
    
    // Ajouter la classe 'selected' au bouton correspondant
    document.querySelector(`#btn-${selectedId.replace('bloc-', '')}`).classList.add('selected');
}

// Ajouter des écouteurs d'événements aux boutons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const blocId = e.target.id.replace('btn-', 'bloc-');
        afficherBloc(blocId);
    });
});

// Afficher le premier bloc par défaut
afficherBloc('bloc-web');






const phrases = [
    "Bienvenue sur notre espace virtuel, où l'innovation prend vie.",
    "Explorez nos services adaptés à vos besoins spécifiques.",
    "Nous vous proposons des solutions mobiles et web performantes.",
    "Mettez en place un chatbot pour améliorer l'interaction avec vos clients sur toutes vos plateformes.",
    "Profitez d'une gestion approfondie et sécurisée de vos bases de données.",
    "Créez des logiciels de bureau sur mesure, adaptés à vos processus métiers.",
    "Optimisez votre présence numérique avec des applications mobiles modernes.",
    "Notre expertise en intelligence artificielle pour transformer votre entreprise.",
    "Développez des solutions e-commerce innovantes pour booster vos ventes.",
    "Bénéficiez de services personnalisés pour chaque étape de votre transformation digitale.",
    "Contactez-nous dès aujourd'hui pour discuter de vos projets numériques.",
    "Merci de votre visite et à très bientôt !"
];


let index = 0;
let charIndex = 0;
const textElement = document.querySelector(".dynamic-text");

function typeText() {
    if (charIndex < phrases[index].length) {
        textElement.textContent += phrases[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 70); // Temps entre chaque lettre (en ms)
    } else {
        setTimeout(eraseText, 2000); // Temps avant de commencer à effacer (en ms)
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, 20); // Temps entre chaque suppression de lettre (en ms)
    } else {
        index = (index + 1) % phrases.length; // Passer à la phrase suivante
        setTimeout(typeText, 500); // Temps avant de commencer la nouvelle phrase (en ms)
    }
}

typeText();

const checkboxes = document.querySelectorAll('input[name="location"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(cb => {
            if (cb !== checkbox) cb.checked = false;
        });
    });
});

document.getElementById("submit-btn").addEventListener("click", function() {
    const selectedLocation = document.querySelector('input[name="location"]:checked');
    const messageElement = document.getElementById("validation-message");

    if (selectedLocation) {
        messageElement.textContent = `Merci d'avoir choisi ${selectedLocation.value}. Un de nos agents vous contactera pour un rendez-vous.`;
        messageElement.classList.remove("hidden");
    } else {
        messageElement.textContent = "Veuillez sélectionner une localisation.";
        messageElement.classList.remove("hidden");
        messageElement.style.backgroundColor = "#f44336"; // Rouge pour l'erreur
    }
});




document.getElementById('left-arrow').addEventListener('click', function() {
    document.querySelector('.scrollable-images').scrollBy({
        left: -200, // Ajustez la valeur pour contrôler la vitesse de défilement
        behavior: 'smooth'
    });
});

document.getElementById('right-arrow').addEventListener('click', function() {
    document.querySelector('.scrollable-images').scrollBy({
        left: 200, // Ajustez la valeur pour contrôler la vitesse de défilement
        behavior: 'smooth'
    });
});