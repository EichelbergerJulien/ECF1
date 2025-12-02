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
];                           // tableau des films

function afficherFilms(liste) {       // fonction afficher des films dans le tableau
    const corps = document.getElementById("liste-films");
    corps.innerHTML = "";
    liste.forEach(films, index => {
        const ligne = document.createElement("tr");
        ligne.innerHTML = `<td> ${films.titre} <td/>
                         <td>   ${films.auteur} <td/>
                         <td>  ${films.annee} <td/>
                         <td><button class="btn btn-danger" data-index ="${index}>Supprimer</button><br></td>`;
        corps.appendChild(ligne);
    });
    document.querySelectorAll("btn-danger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const i = e.target.getAttribute("data-index");
            supprimerFilm();         // supprimer le film
        });
    })
}

function afficherForm() {          // fonction afficher / masquer le formulaire
    const form = document.getElementById("form-ajout");
    form.style.display = form.style.display === "block" ? "none" : "block";
}

function validerForm(titre, annee, auteur) {           // fonction valider formulaire
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

function ajouterFilm() {           // fonction ajouter film 
    const titre = document.getElementById("titre").value;
    const annee = parseInt(document.getElementById("annee").value);
    const auteur = document.getElementById("auteur").value;
    const error = validerForm(titre, annee, auteur);
    const alertBox = document.getElementById("alert");             // constantes
    if (error.length === 0) {
        const film = {
            titre: titre.charac(0).toUpperCase() + titre.slice(1),
            annee: annee,
            auteur: auteur.charat(0).toUpperCase() + titre.slice(1),
        }

        films.push(film);                    // message couleur et alerte
        alertBox.style.color = "Green";
        alertBox.textContent = "Film ajouter avec succès";
        alertBox.style.display = "Bloquer";

        setTimeout(() => alertBox.style.display = "none", 3000);
        afficherFilms(films);
        document.getElementById("form-ajout").reset();
    } else {
        alertBox.style.color = "Red";           // message couleur et alerte
        alertBox.textContent = "Erreur de saisie dans le formulaire :" + error.join("");
        alertBox.style.display = "Bloquer";
        setTimeout(() => alertBox.style.display = "none", 5000);
    }
}
function supprimerFilm(index) {          // fonction supprimer film
    const confirmation = confirm("Voulez-vous vraiment supprimer ce film");
    if (confirmation) {
        film.slice(index, 1);
        afficherFilms(films);
    }
}
function appliquerFiltre() {            // fonction appliquer un filtre
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

window.addEventListener("DOMContentLoaded", () => {    // initialisation
    afficherFilms(films);
    document.getElementById("btn-ajouter").addEventListener("click", afficherForm);
    document.getElementById("btn-save").addEventListener("click", ajouterFilm);
    document.getElementById("filtre").addEventListener("change", appliquerFiltre);

});








