const contenedorSedes = document.getElementById('sedes');
const contenedorGeneracion = document.getElementById('generation');
const list = document.getElementById('estudiante');
const report = document.getElementById('reporte');
const resultado = document.getElementById('mostrar');
let dataAcumulada = null;

//Funcion para desplegar info de Estudiantes, presionando boton Estudiantes por Generacion
const getList = (dataAcumulada, campus, generacion) => {
  let estudiantes = (dataAcumulada[campus].generacion);
  let alumnasEstudiantes = Object.values(estudiantes);  
   
  for (let i = 0; i < alumnasEstudiantes.length; i++) {
    console.log(alumnasEstudiantes[i]);
  }
};

list.addEventListener('click', ()=>{
  const campus = contenedorSedes.value;
  const generacion = contenedorGeneracion.value;
  getList(dataAcumulada, campus, generacion);
  
  console.log(campus, generacion);
  resultado.innerHTML = 'Estudiantes de la '+ generacion + ' generación en ' + campus;

});
 
// Funcion para mostrar generaciones
getGeneration = (data) => {
  dataAcumulada = data;
  const generaciones = data[event.target.value].generacion; 
  contenedorGeneracion.innerHTML = '';

  for (let key in generaciones) {
    let option = document.createElement('option');  
    option.innerHTML = key;
    contenedorGeneracion.appendChild(option);    
  }
  // Dentro de la Funcion Generaciones, se habilita deshabilitan botones
  contenedorGeneracion.addEventListener('change', ()=>{    
    const botonesDisable = document.getElementsByClassName('est');   

    for (let i = 0; i < botonesDisable.length; i++) {
      botonesDisable[i].removeAttribute('disabled');
    
    }
  });
};

// Funcion para mostrar sedes
getSedes = (data) =>{
  for (let key in data) {    
    let option = document.createElement('option');    
    option.innerHTML = key;
    contenedorSedes.appendChild(option);    
  }
  
  contenedorSedes.addEventListener('change', ()=>{
    getGeneration(data);
  });
};


