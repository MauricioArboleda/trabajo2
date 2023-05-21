import React from 'react'

export const EjercicioSeis = () => {
  return (
    <>
    <div class="card">
      <div class="card-header">
        Ejercicio 6
      </div>
      <div class="card-body">
        <h5 class="card-title">Al precionar el Boton mostrara los dias De la Semana en Mayusculas </h5>
        
        <button href="#" class="" onClick={() =>{
    const diasLaborables = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

    const diasMayusculas = diasLaborables.map(function(dia) {
      return dia.toUpperCase();
    });
    
    alert(diasMayusculas);
    
            
        }}
        
         >Boton</button>
      </div>
    </div>
    
        </>
  )
}
