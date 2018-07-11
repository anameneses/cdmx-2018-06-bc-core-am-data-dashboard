const contenedorSedes = document.getElementById('sedes');
const contenedorGeneracion = document.getElementById('generation');
const list = document.getElementById('estudiante');
const report = document.getElementById('reporte');
const resultado = document.getElementById('resultado');

let dataAcumulada = null;


const getList = (data, campus, generacion) => {
  let estudiantes = (data[campus].generacion);
  //console.log(estudiantes)
  let alumnasEstudiantes = Object.values(estudiantes);
  //console.log(alumnasEstudiantes)
   
  for (let i=0; i<alumnasEstudiantes.length; i++) {
    console.log(alumnasEstudiantes[i]);
   
  }
 

}

list.addEventListener('click', ()=>{
  const campus = contenedorSedes.value;
  const generacion = contenedorGeneracion.value;
  
    
  getList(dataAcumulada, campus, generacion);
  
   console.log(campus, generacion)
   resultado.innerHTML += campus, generacion  + ' generacion';
  
   
});
 
// getList(dataAcumulada,);


// Funcion para mostrar generaciones
getGeneration = (data) => {
  dataAcumulada = data;
  const generaciones = data[event.target.value].generacion;
  // console.log(data[event.target.value])
  // console.log(generaciones);
  contenedorGeneracion.innerHTML = '';
  for (let key in generaciones) {
    // console.log(generaciones[key]);
    let option = document.createElement('option');
    // console.log(option)
    option.innerHTML = key;
    contenedorGeneracion.appendChild(option);
    // console.log(option);
  }
  // Dentro de la Funcion Generaciones, se habilita deshabilitan botones
  contenedorGeneracion.addEventListener('change', ()=>{
    // console.log(event.target.value)
    const botonesDisable = document.getElementsByClassName('est');
    // console.log(botonesDisable);
    for (let i = 0; i < botonesDisable.length; i++) {
      // console.log(botonesDisable[i]);
      botonesDisable[i].removeAttribute('disabled');
      botonesDisable[i].style.background = '#56f89a'; 
      // console.log(botonesDisable[i]);
    }
  });
};

// Funcion para mostrar sedes
// se nombra una funcion que tendra la data
getSedes = (data) =>{
  for (let key in data) {
    // console.log(data[key]);
    let option = document.createElement('option');
    // console.log(option);
    option.innerHTML = key;
    contenedorSedes.appendChild(option);
    // console.log(option)
  }
  
  contenedorSedes.addEventListener('change', ()=>{
    getGeneration(data);
  });
};


