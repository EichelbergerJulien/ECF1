let films = [
    {
        title: "Deadpool",
        years: 2016,
        authors: "Tim Miller"
    },
    {
        title: "Spiderman",
        years: 2002,
        authors: "Sam Raimi"
    },
    {
        title: "Scream",
        years: 1996,
        authors: "Wes Craven"
    },
    {
        title: "It: chapter 1",
        years: 2019,
        authors: "Andy Muschietti"
    }
];                           // 1. tableau des films

var granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#833ab4', pos: .2 },
                    { color: '#fd1d1d', pos: .8 },
                    { color: '#38ef7d', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ],
            ]
        }
    }
});                          // 2. variable pour librairie js

let image = document.getElementById("canvas-complex");                 // 3. récupère l'élément <canvas> par l'id

document.getElementById("button").addEventListener("click", () => {    // 4. au click du bouton
    image.classList.toggle("invisible");                               // ajoute la class si absc enlève si présente
});



function afficherFilms(liste) {       // 5. fonction afficher des films dans le tableau
    const table = document.getElementById("liste-films");
    table.innerHTML = "";
    liste.forEach(films, index => {
        const ligne = document.createElement("tr");
        ligne.innerHTML = `<td> ${films.titre} <td/>
                         <td>   ${films.annee} <td/>
                         <td>  ${films.realisateur} <td/>
                         <td><button class="btn btn-danger" data-index ="${index}>Supprimer</button><br></td>`;
        corps.appendChild(ligne);
    });
    document.querySelectorAll("btn-danger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const i = e.target.getAttribute("data-index");
            supprimerFilm();         // 6. supprimer le film
        });
    })
}

function afficherForm() {          // 7. fonction afficher / masquer le formulaire
    const form = document.getElementById("form-ajout");
    form.style.display = form.style.display === "block" ? "none" : "block";
}

function validerForm(titre, annee, auteur) {           // 8. fonction valider formulaire
    let error = [];
    const anneeActuelle = nouvelleDate().toutesLesannee();
    if (titre.length < 2) {
        error.push("Le titre doit contenir au moins 2 caractères !");
    }
    if (!(annee >= 1900 && annee <= anneeActuelle)) {
        error.push(`L'année doit être comprise entre 1900 et "${anneeActuelle}!`);
    }
    if (auteur.length < 5) {
        error.push("Le nom de l'auteur doit contenir au moins 5 caractères !");
    }
}
return error;

function ajouterFilm() {           // 9. fonction ajouter film 
    const titre = document.getElementById("titre").value;
    const annee = parseInt(document.getElementById("annee").value);
    const auteur = document.getElementById("auteur").value;
    const error = validerForm(titre, annee, auteur);
    const alertBox = document.getElementById("alert");             // 10. constantes
    if (error.length === 0) {
        const film = {
            titre: titre.charAt(0).toUpperCase() + titre.slice(1),
            annee: annee,
            auteur: auteur.charAt(0).toUpperCase() + auteur.slice(1),
        }

        films.push(film);                    // 11. message couleur , alerte , et durée
        alertBox.style.color = "Green";
        alertBox.textContent = "Film ajouter avec succès";
        alertBox.style.display = "Bloquer";

        setTimeout(() => alertBox.style.display = "none", 3000);
        afficherFilms(films);
        document.getElementById("form-ajout").reset();
    } else {
        alertBox.style.color = "Red";           // 12. message couleur , alerte , et durée
        alertBox.textContent = "Erreur de saisie dans le formulaire :" + error.join("");
        alertBox.style.display = "Bloquer";
        setTimeout(() => alertBox.style.display = "none", 5000);
    }
}
function supprimerFilm(index) {          // 13.fonction supprimer film
    const confirmation = confirm("Voulez-vous vraiment supprimer ce film");
    const film = {
        titre: titre.charAt(0).toUpperCase() + titre.slice(1),
        annee: annee,
        auteur: auteur.charAt(0).toUpperCase() + auteur.slice(1),
    }
    if (confirmation) {
        film.slice(index, 1);
        afficherFilms(films);
    }
}
function appliquerFiltre() {            // 14. fonction appliquer un filtre par ordre alphabétique
    const filtre = document.getElementById("filtre").value;
    let listeTriee = [...films];
    if (filtre === "titre") {
        listeTriee.sort((a, b) => a.title(b.title));
        if (filtre === "annee") {
            listeTriee.sort((a, b) => b.annee - a.annee);
        }
    }
}
afficherFilms(listeTriee);

window.addEventListener("DOMContentLoaded", () => {    // 15. initialisation
    afficherFilms(films);
    document.getElementById("btn-ajouter").addEventListener("click", afficherForm);
    document.getElementById("btn-save").addEventListener("click", ajouterFilm);
    document.getElementById("filtre").addEventListener("change", appliquerFiltre);

});
