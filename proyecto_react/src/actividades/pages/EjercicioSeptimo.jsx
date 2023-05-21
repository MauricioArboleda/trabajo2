import React from 'react'

export const EjercicioSeptimo = () => {
  return (
    <>
    <div class="card">
      <div class="card-header">
        Ejercicio 7
      </div>
      <div class="card-body">
        <h5 class="card-title">Al precionar el Boton mostrara un array de 10 numeros, y luego mostrara los pares e impares por separado </h5>
        
        <button href="#" class="" onClick={() =>{
  
    
  var numeros = new Array(10);
  numeros = [2,4,3,7,1,21,9,25,10,12];
   pares= []
   impares=[]
  var pares = numeros.filter( (val) => val%2==0);
  var impares = numeros.filter( (val) => val%2!=0);
  alert("Array completa: "+numeros)
  alert("pares"+pares);
  alert("impares"+impares);
        }}
        
         >Boton</button>
      </div>
    </div>
    
        </>
  )
}
