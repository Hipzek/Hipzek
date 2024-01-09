
/* Animation dans la page d'accueil avec la souris */
const colors = ["#66BFBF", "#EAF6F6", "#FF0063"];

let animateCircleFragment = document.createDocumentFragment();

/* Création d'un élément div représentant le cercle */
function animateCircle(event) {
  let circleDivElem = document.createElement("div");
  circleDivElem.classList = "circle";


  /* Ajout du cercle au document */
  animateCircleFragment.appendChild(circleDivElem);
  document.body.appendChild(animateCircleFragment);

  /* Positionnement initial du cercle à l'emplacement de la souris */
  circleDivElem.style.left = event.clientX + "px";
  circleDivElem.style.top = event.clientY + "px";
  
  /* Attribution d'une couleur aléatoire à la bordure du cercle */
  let color = colors[Math.floor(Math.random() * colors.length)];
  circleDivElem.style.borderColor = color;

  /* Configuration des propriétés de transition pour l'animation */
  circleDivElem.style.transition = "all 0.5s linear 0s";

  /* Animation du cercle vers une nouvelle position avec des modifications de taille et d'opacité */
  circleDivElem.style.left = circleDivElem.offsetLeft + 200 + "px";
  circleDivElem.style.top = circleDivElem.offsetTop - 20 + "px";

  circleDivElem.style.width = "40px";
  circleDivElem.style.height = "40px";
  circleDivElem.style.borderWidth = "5px";
  circleDivElem.style.opacity = 0;
}
document.addEventListener("mousemove", animateCircle);
