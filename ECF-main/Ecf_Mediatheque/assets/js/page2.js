// 1 variable et paramètres OMDB var KEY ET var API URL  x
// 2 FONCTION POUR CONSTRUIRE URL (FETCH)                x
// 3 rechercher des films via l'api                      x
// 4 afficher les resultats de la page                   x
// 5 afficher la pagination                              ??
// 6 changer de page                                     x
// 7 message simple ( alert )                            x
// 8 gestion du formulaire                               x 
// 9 initialisation                                      x


let key = "6a3f186d";                                                                      // 1 clé API
let apiUrl = `http://www.omdbapi.com/?apikey=${key}&s=${titre}&type=${type}&y=${annee}`;   // 1. Url API
let pageActuelle = 1;
let derniereRecherche = {};
let button = document.querySelector('#button');
let reponse = document.querySelector('#reponse');
let card = document.querySelector('#card');

const titre = ("titre-rech");
const annee = ("annee-rech");
const type = ("type-rech");

button.addEventListener("click"), () => {
    let data = document.querySelector('#dataApi').value;

    fetch(apiUrl)
        .then((reponse) => {
            return reponse.json();                              // 2. fetch
        })
        .then((data) => {
            console.log(data);
            reponse.innerHTML = `<p> ${data.titre} : ${data.annee} , ${data.type} </p>`
        })
        .catch("Erreur film introuvable");

    function afficherCard(data) {
        card.innerHTML = `<div class="card">
                        <h5 class="card-poster">: ${data.card}</h5>    
                        <ul>
                            <li>: ${data.poster}</li>
                            <li>: ${data.titre}</li>
                            <li>: ${data.annee}</li>
                            <li>: ${data.type}</li>
                        </ul>
                      </div>
        `};
    }

    function rechercherFilms(page = 1) {
        titre = document.getElementById("titre-rech").value;         // 3. rechercher film
        annee = document.getElementById("annee-rech").value;
        type = document.getElementById("type-rech").value;

        if (titre.length < 1) {
            afficher.message("Veuillez entrer un titre pour rechercher un film !!");
            return;
        }
    }

    derniereRecherche = { titre, auteur, type };                     // sauvegarder la dernière recherche

    function afficherResultats(resultats) {
        const contenu = document.getElementById("résultats");       // 4. afficher les resultats de la page 
        contenu.innerHTML = "";
        if (resultats.length === 0) {
            contenu.innerHTML = "Aucun film à afficher !! ";
            return;
        }
        resultats.forEach(film => {
            const div = document.createElement("div");
            div.classList.add("film-cart");
            const poster = film.Poster !== "non disponible" ? film.Poster : "placeholder.jpg";
            div.innerHTML = `< ="${poster}" alt="">
                         < ="${film.title}" alt="">
                         < ="${film.annee}" alt="">
                         < ="${film.type}" alt="">`;

            contenu.appendChild(div);
        });
    }
    function changerPage(nouvellePage) {                            // 5. changer de page  
        pageActuelle = nouvellePage;
        rechercherFilms(nouvellePage);
    }
    function afficherMessage(texte) {
        const alert = document.getElementById("alert-rech");       // 6. message ( alert )
        alert.textContent = texte;
        alert.style.display = "block";
        setTimeout(() => alert.style.display = "none", 3000);
    }
    function setupForm() {                                        // 7. gestion du formulaire
        document.getElementById("btn-rech").addEventListener("click",);
        e.preventDefault();
        pageActuelle = 1;
        rechercherFilms();
    }

    window.addEventListener("DOMContentloaded", () => {           // 8. initialisation
        setupForm();
    });

