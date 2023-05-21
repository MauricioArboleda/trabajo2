import React from 'react'

export const EjercicioDos = () => {
  return (
    <>
    <div class="card">
      <div class="card-header">
        Ejercicio 2
      </div>
      <div class="card-body">
        <h5 class="card-title">Ingrese la nota  </h5>
        <input class="form-control" type="number" id='numero' aria-label="readonly input example" readonly></input>
        <button href="#" class="" onClick={() =>{
    
    
          var nota = parseInt(document.getElementById("numero").value);
        if (Number(nota) == nota) {
          //SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
          if (nota > 0 && nota <= 10) {
            if (nota < 3) {
              alert("Muy deficiente")
            }
            else if (nota < 5) {
              alert("Insuficiete")
            } else if (nota < 6) {
              alert("Suficiente")
            } else if (nota < 7) {
              alert("Bien");
            } else if (nota < 9) {
              alert("Notable"); 5
            } else if (nota >= 9) {
              alert("Sobresaliente")
            }
          }
          //SI LA NOTA NO ES ENTRE 0 Y 10
          else {
            alert("Nota incorrecta ")
          }
        }
        //SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
        else {
          //SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
          if (nota != undefined) { 
            alert("Introduce un numero valido")
          }
        }
      
      
           
      

      
        }}
        
      >Calcular</button>
      </div>
    </div>
    
        </>
  )
}
