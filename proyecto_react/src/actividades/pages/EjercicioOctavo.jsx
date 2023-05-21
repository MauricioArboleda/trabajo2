import React from 'react'

export const EjercicioOctavo = () => {
  return (
    <>
    <div class="card">
      <div class="card-header">
        Ejercicio 8
      </div>
      <div class="card-body">
        <h5 class="card-title">preciona el boton para rotar los ocupados y libres  </h5>
        
        <button href="#" class="" onClick={() =>{
  
  let ocupados = ['mauricio', 'Luisa', 'Juan', 'Ana'];
  let libres = ['jessica', 'alejandro', 'Alba', 'Felipe'];
  rotar(ocupados,libres)
   function rotar(lst1, lst2){
      
     lst1.push(libres[0])
     lst2.push(ocupados[0]) }
  
   alert(libres);
   
   alert( ocupados);
  
        }}
        
         >Boton</button>
      </div>
    </div>
    
        </>
  )
}
