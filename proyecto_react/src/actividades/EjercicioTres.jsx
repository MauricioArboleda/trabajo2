import React from 'react'

export const EjercicioTres = () => {
  return (
    <>
    <div class="card">
      <div class="card-header">
        Ejercicio 3
      </div>
      <div class="card-body">
        <h5 class="card-title">Boton Para Ingresar Cadenas</h5>
        
        <button href="#" class="" onClick={() =>{
    
           // DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
  var resultado = ""
  // BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
  do {
      // PEDIMOS LA CADENA POR TECLADO
      var cadena = prompt("Introduce una cadena");
      // SI LA VARIABLE RESULTADO ESTÁ VACÍA
      if (resultado == "") {
          // CONCATENAMOS SIN UTILIZAR GUIÓN
          resultado = resultado + cadena;
      }
      // SINÓ
      else {
          // CONCATENAMOS CON GUIÓN
          resultado = resultado + "-" + cadena;
      }
  // MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
  } while (confirm("Desea seguir?"));
  // SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO 
  alert(resultado);
        }}
        
        >Asignar Cadenas </button>
      </div>
    </div>
    
        </>
  )
}
