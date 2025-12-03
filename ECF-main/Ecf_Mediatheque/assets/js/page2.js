// 1 variable et paramètres OMDB var KEY ET var API URL  x
// 2 FONCTION POUR CONSTRUIRE URL (FETCH)                x
// 3 rechercher des films via l'api                      x
// 4 afficher les resultats de la page                   x
// 5 afficher la pagination                              ??
// 6 changer de page                                      
// 7 message simple ( alert )                            
// 8 gestion du formulaire                               
// 9 initialisation                                      


let key = "6a3f186d";     // 1 clé API
let apiUrl = "http://img.omdbapi.com/?apikey=[key]&";   // 1. Url API

let pageActuelle = 1;
let derniereRecherche = {};

let button = document.querySelector('#button');
let reponse = document.querySelector('#reponse');
let card = document.querySelector('#card');

button.addEventListener('click', () => {
    let filmsApi = document.querySelector('#filmsApi').value;

    fetch(`http://img.omdbapi.com/?apikey=[6a3f186d]&`)               // 2. fetch

        .then(data => data.json())
});

        .then(filmsApi => {
    reponse.innerHTML = `<p> ${titre} : ${annee} , ${auteur} </p>`
})
    .catch("Erreur film introuvable");

function rechercherFilms(page = 1) {
    const titre = document.getElementById("titre-rech").value;         // 3. rechercher film
    const annee = document.getElementById("annee-rech").value;
    const type = document.getElementById("type-rech").value;

    if (titre.length < 1) {
        afficher.message("Veuillez entrer un titre pour rechercher un film !!");
        return;
    }
}

derniereRecherche = { titre, auteur, type };                  // sauvegarder la dernière recherche

function afficherResultats(resultats) {
    const contenu = document.getElementById("résultats");     // 4. afficher les resultats de la page 
    contenu.innerHTML = "";
    if (resultats.length === 0) {
        contenu.innerHTML = "Aucun film à afficher !! ";
        return;
    }
    resultats.forEach(film => {
        const div = document.createElement("div");
        div.classList.add("film-cart");
        const poster = film.Poster !== "non disponible" ? film.Poster : "placeholder.jpg";
        div.innerHTML = `< img src ${poster} alt="Poster">
                         < img src ${film.title}alt="Poster">
                         < img src ${film.annee}alt="Poster">
                         < img src ${film.type}alt="Poster">`;

        contenu.appendChild(div);
    });
}
