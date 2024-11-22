const navslidef = () => {
    const option = document.querySelector('.btn');
    const logo=document.querySelector('.btn_logop')
    const nav1 = document.querySelector('.opt1'); 
    const nav2 = document.querySelector('.opt2'); 
    const nav3 = document.querySelector('.opt3'); 
    const nav4 = document.querySelector('.opt4'); 
    const filtre=document.querySelector('.filtre');
    option.addEventListener('click', () => {
        nav1.classList.toggle("opta1");
        nav2.classList.toggle("opta2");
        nav3.classList.toggle("opta3");
        nav4.classList.toggle("opta4");
        logo.classList.toggle("btn_logo2");
        filtre.classList.toggle("filtre_n");
    });
}
navslidef();

window.addEventListener('scroll', function() {
    const element = document.querySelector('.btn_logo');
    const scrollPosition = window.scrollY;
    
    // Rotation en fonction de la position de défilement
    element.style.transform = `rotate(${scrollPosition}deg)`;
});


// const chgMode =() =>{
//     const mode=document.querySelector('.mode');
//     const nav=document.querySelector('.ALL_ligth');
//     const options=document.querySelector('.options');
//     const text1=document.querySelector('.text_intro_acceiulle');
//     const textElement = document.querySelector(".dynamic-text");
    
//     mode.addEventListener('click', ()=> {
//         nav.classList.toggle('ALL_dark');
//         options.classList.toggle('option2');
//         text1.classList.toggle('text_intro_acceiulle2');
//         textElement.classList.toggle('dynamic-text2');
//     });
// }
// chgMode();

// AOS.init();