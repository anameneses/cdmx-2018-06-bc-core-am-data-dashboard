let evento = document.getElementById("sedes");
evento.addEventListener("click", computeStudentsStats);


function computeStudentsStats(){
    
    let mostrarDatos = fetch("../data/laboratoria.json")    
    mostrarDatos.then((res) => {
        console.log(res);
        return res.json();        
    })

    .then(function(data){
        console.log(data);
            let html ="";
       /* data.forEach((datos) => {
            html += `
            <li>${datos.generacion}${datos.estudiantes}</li>
            `;*/
            
        })
        //document.getElementById("resultado").innerHTML=html;
    //})
}
/*function computeStudentsStats(){
    fetch("laboratoria.json")
    .then(function(resp){
        console.log(res);
    })
}*/
    
