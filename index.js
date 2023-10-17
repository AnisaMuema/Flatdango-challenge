const url =  'http://localhost:3000/films'
const picture = document.getElementById('image')  
const Time = document.getElementById('duration')
const describe = document.getElementById('description')        
const film = document.getElementById('title')
const button = document.querySelector('.buy-ticket')
const video = document.getElementById('movies-bar')
const capacity = document.getElementById('capacity')
const show = document.getElementById('showtime')
const sold = document.getElementById('available-ticket')
const availableTickets = capacity - sold  
const filmDisplay = document.getElementById("films")
// Get data and render our films to the DOM
let getFilms = (id = 3) => {
    fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((data) => {
        picture.setAttribute("src", data.poster);
        film.innerText = data.title;
        describe.innerText = data.description;
        Time.innerText = 'duration'+" " + data.runtime; 
        capacity.innerText ='capacity '+ data.capacity; 
        sold.innerText = "available tickets "+ (data.capacity-data.tickets_sold);
        show.innerText = "show time "+ data.showtime;
    })
    
}
getFilms()

let allFilms = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => returnFilms(data))
}

allFilms()

let returnFilms = (array) =>{
    const filmHtml = array.map(function(character){
        return `<li><a href="#"><span class="film item" onclick="getFilms(${character.id})">${character.title}</a></li>`
    })
    filmDisplay.innerHTML = filmHtml.join('')
}

button.addEventListener('click', function() {
    console.log('clicked');
     // console.log(sold.innerText.split(' ')[2]);
     let ticket = sold.innerText.split(' ')[2] -1 
     if(ticket === -1){
        return "sold out"
     }
     
     sold.innerText ="available tickets "+ ticket
     
     
 });





 