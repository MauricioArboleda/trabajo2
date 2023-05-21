import React from 'react'
import { EjercicioUno } from './actividades/pages/ejercicioUno'
import { EjercicioDos } from './actividades/pages/EjercicioDos'
import { Route,Routes } from 'react-router-dom'
import { EjercicioTres } from './actividades/EjercicioTres'
import { EjercicioCuatro } from './actividades/pages/EjercicioCuatro'
import { EjercicioCinco } from './actividades/pages/EjercicioCinco'
import { EjercicioSeis } from './actividades/pages/EjercicioSeis'
import { EjercicioSeptimo } from './actividades/pages/EjercicioSeptimo'
import { EjercicioOctavo } from './actividades/pages/EjercicioOctavo'
import { EjercicioNueve } from './actividades/pages/EjercicioNueve'
import { EjercicioDies } from './actividades/pages/EjercicioDies'
//rafc para que aparezca para llenar

export const AppRouter = () => {
  return (
    <div>
    <Routes>
        <Route path='Ejerciciouno' element={<EjercicioUno/>}/> 
        <Route path='EjercicioDos' element={<EjercicioDos/>}/> 
        <Route path='EjercicioTres' element={<EjercicioTres/>}/> 
        <Route path='EjercicioCuatro' element={<EjercicioCuatro/>}/> 
        <Route path='EjercicioCinco' element={<EjercicioCinco/>}/> 
        <Route path='EjercicioSeis' element={<EjercicioSeis/>}/> 
        <Route path='EjercicioSeptimo' element={<EjercicioSeptimo/>}/>
        <Route path='EjercicioOctavo' element={<EjercicioOctavo/>}/>
        <Route path='EjercicioNueve' element={<EjercicioNueve/>}/>
        <Route path='EjercicioDies' element={<EjercicioDies/>}/>

        
    </Routes>
    </div>
  )
}
