// On récupère le bouton grâce à son identifiant HTML
var bouton = document.getElementById("bouton-imprimer");

// Quand on clique sur le bouton, cela lance l'impression du navigateur
bouton.onclick = function() {
    window.print();
};