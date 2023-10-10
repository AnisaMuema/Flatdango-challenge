const button = document.getElementById("button")

button.addEventListener("click", (e)=> {
    e.preventDefault
     

})


fetch('http://localhost:3000/films')
.then(res => res.json())
.then((data) => console.log(data))