document.addEventListener("DOMContentLoaded", async function() {
    const container = document.getElementById("pointMcolor");
    const numberOfDivs = 1500;
    const colors = ['vert', 'rouge', 'jaune', 'bleu', 'noir', 'blanc', 'violet'];

    for (let i = 1; i <= numberOfDivs; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const div = document.createElement("div");
        div.className = randomColor;
        div.style.setProperty('--x-position', Math.random()); // Position horizontale aléatoire
        div.style.setProperty('--animation-duration', `${Math.random() * 400}s`); // Durée aléatoire entre 10s et 15s
        div.style.setProperty('--animation-delay', `${Math.random() * 5}s`); // Délai d'animation aléatoire
        container.appendChild(div);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
});




const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  // Bascule l'affichage des flèches
  arrowDown.style.display = optionsContainer.classList.contains("active") ? 'none' : 'inline-block';
  arrowUp.style.display = optionsContainer.classList.contains("active") ? 'inline-block' : 'none';
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");

    // Réinitialise les flèches après la sélection
    arrowDown.style.display = 'inline-block';
    arrowUp.style.display = 'none';
  });
});
