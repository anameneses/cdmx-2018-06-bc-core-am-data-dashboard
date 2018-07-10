const sedes = document.getElementById('sedes');
const generation = document.getElementById('generacion');
const list = document.getElementById('estudiante');
const report = document.getElementById('reporte');

getSedes = (data) =>{
  sedes.addEventListener('change', (event) =>{
    const createArray = Object.keys(data);
    console.log(createArray);
    var sedesCampus=[];
    //console.log(sedesCampus)
    for (let i=0; i<createArray.length; i++){
      
      
      //console.log(createArray[i])
      sedes.options[i] = new Option(createArray[i]);
      
    }
    
    
    //const campus = event.target.value;  
    
    // const index = event.target.selectedIndex;    
    //console.log(event.target.value);
    //    const campus= event.target[index].innerHTML.toLowerCase()
    //console.log(campus);
    //const mostrarGener = data[campus];
    
    
    //console.log(mostrarGener);
    //console.log(mostrarCampus);
    // console.log(event.target[index].innerHTML.toLowerCase());
    //for (key in campus) {}
    // console.log(campus)
    // return campus.generacion;
  });
};


