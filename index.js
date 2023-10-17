const button = document.getElementById("button")
const filmsContainer = document.getElementById("Film-bar")

// button.addEventListener("click", (e)=> {
//     e.preventDefault   

// })

// DOM Render Functions


// Initial render
// Get data and render our films to the DOM
let getFilms = () => {
    fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((data) => console.log(data))

    
}
getFilms();


