// 1 constantes et paramètres OMDB CONST KEY ET CONST API URL
// 2 FONCTION POUR CONSTRUIRE URL (FETCH)
// 3 rechercher des films via l'api
// 4 afficher les resultats de la page 
// 5 afficher la pagination 
// 6 changer de page
// 7 message simple ( alert )
// 8 gestion du formulaire 
// 9 initialisation













let key = 6a3f186d
let apiUrl = http://img.omdbapi.com/?apikey=[]&;




let button = document.querySelector('#button');
let reponse = document.querySelector('#reponse'); //div reponse html

button.addEventListener('click', () => {
    let city = document.querySelector('#ville').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f213ba9385f29919b947897da0c762c&units=metric&lang=fr`)
        .then(data => data.json())
        .then(data => {
            reponse.innerHTML = `<p>En ce moment à ${data.name} :</p><p>Il fait ${data.main.temp}°C, ressenti ${data.main.feels_like}°C</p>`
        })
})
