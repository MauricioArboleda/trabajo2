import React from 'react'

export const EjercicioUno = () => {
  return (
    <>
<div class="card">
  <div class="card-header">
    Ejercicio 1
  </div>
  <div class="card-body">
    <h5 class="card-title">Ingrese la edad </h5>
    <input class="form-control" type="number" id='edad' aria-label="readonly input example" readonly></input>
    <button href="#" class="" onClick={() =>{

        var edad = parseInt(document.getElementById("edad").value);
        if(edad >=18 &edad <=86){
            alert("Felicidades puedes conducir")
        }
        else if(edad<=17){
            alert("No puedes conducir")
        }
        else
        {
alert("Error")
        }

        
    }}
    
     >Calcular</button>
  </div>
</div>

    </>
  )
}
