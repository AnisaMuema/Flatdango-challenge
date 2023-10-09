fetch("https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg", ()=>{
    const configurationObject = {
        method: "GET",
        "Contetent-Type": "Application.json",
    }
})
.then ((res) => res.json)
.then((data) => console.log(data))