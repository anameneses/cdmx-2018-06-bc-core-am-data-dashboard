const sedes = document.getElementById('sedes');
const contenedorGeneracion = document.getElementById('generation');
const list = document.getElementById('estudiante');
const report = document.getElementById('reporte');


let dataAcumulada = null;


const getList = (data) => {
  dataAcumulada = data;
  console.log(data);
};
list.addEventListener('click', ()=>{
  getList(dataAcumulada);
  
  console.log(sedes.value, contenedorGeneracion.value, data[event.target.value]);
});

const getGeneration = (data) => {
  dataAcumulada = data;

  const generaciones = data[event.target.value].generacion;
 console.log(data[event.target.value])
  console.log(generaciones);
  for (let key in generaciones) {
    console.log(generaciones[key]);
    let option = document.createElement('option');
    // console.log(option)
    option.innerHTML = key;
    contenedorGeneracion.appendChild(option);
    console.log(option);
  }
  contenedorGeneracion.addEventListener('change', ()=>{
    getList(data);
    const botonesDisable = document.getElementsByClassName('est');
    console.log(botonesDisable);
    for (let i = 0; i < botonesDisable.length; i++) {
      console.log(botonesDisable[i]);
      botonesDisable[i].removeAttribute('disabled');
      botonesDisable[i].style.background = 'green'; 
      console.log(botonesDisable[i]);
    }
  });
};


getSedes = (data) =>{
  for (let key in data) {
    // console.log(data[key]);
    let option = document.createElement('option');
    console.log(option);
    option.innerHTML = key;
    sedes.appendChild(option);
    // console.log(option)
  }
  sedes.addEventListener('change', ()=>{
    getGeneration(data);
  });
};


computeStudentsStats=(laboratoria) => {
  console.log(computeStudentsStats)
}