// recuperer boutons/submit/documents dont j'ai besoin

let submit = document.querySelector(".submit");
let listesBtn = document.querySelectorAll(".number p");
let rating = document.querySelector(".rating");
let thanks = document.querySelector(".thanks");
let phrase = document.querySelector(".phrase");

// variable pour btn submit
let btnClicked = false;

// pour chaque bouton
listesBtn.forEach((bouton) => {
  // on met une ecoute d'evenement sur le clique
  bouton.addEventListener("click", () => {
    // a chaque click on remet le background normal sur chaque bouton
    listesBtn.forEach((btn) => {
      btn.style.backgroundColor = "";
    });
    // bouton clique background change
    bouton.style.backgroundColor = " hsl(25, 97%, 53%)";
    // creation var pour stocker valeur du bouton clique
    let value = bouton.innerText;

    // on passe en true pour quand un numerom est clicked
    btnClicked = true;

    // on recup la phrase du pop up et on ajoute la var value
    phrase.textContent = `You selected ${value} out of 5`;
  });
});

// evenement ecoute de click sur le btn submit
submit.addEventListener("click", () => {
  // si pas de numero clicked alerte pour prevenir
  if (btnClicked === false) {
    alert("Veuiller mettre une note.");
    // sinon pop up normal
  } else {
    rating.style.display = "none";
    thanks.style.display = "block";
  }
});
