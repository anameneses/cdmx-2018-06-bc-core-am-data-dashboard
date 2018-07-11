const url = 'https://raw.githubusercontent.com/anameneses/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

window.onload = ()=>{
  fetch(url)
    .then(resp => resp.json()) // pido que res me devuelva el json
    .then((data)=>{ // funcion llamada data
      console.log(data);
      // crear funciones introduciendo la data implicita
             getSedes(data);
     
    });
};
