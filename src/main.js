const sedes = document.getElementById("sedes");

getSedes = (data) =>{
    sedes.addEventListener("change", (event) =>{
       //const index = event.target.selectedIndex;
       const campus = event.target.value;
       console.log(event.target.value)
    //    const campus= event.target[index].innerHTML.toLowerCase()
       console.log(campus)
        console.log(data[campus].generacion.cuarta.estudiantes[3]);
       //console.log(event.target[index].innerHTML.toLowerCase());
        for(key in campus) {}
        //console.log(campus)
        //return campus.generacion;

       
        
    })
}