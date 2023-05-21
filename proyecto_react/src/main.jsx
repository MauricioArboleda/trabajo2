import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { EjercicioUno } from './actividades/pages/ejercicioUno.jsx'
import { EjercicioDos } from './actividades/pages/EjercicioDos.jsx'
import { EjercicioTres } from './actividades/EjercicioTres.jsx'
import { EjercicioCuatro } from './actividades/pages/EjercicioCuatro.jsx'
import { EjercicioCinco } from './actividades/pages/EjercicioCinco.jsx'
import { EjercicioSeis } from './actividades/pages/EjercicioSeis.jsx'
import { EjercicioSeptimo } from './actividades/pages/EjercicioSeptimo.jsx'
import { EjercicioOctavo } from './actividades/pages/EjercicioOctavo.jsx'
import { EjercicioNueve } from './actividades/pages/EjercicioNueve.jsx'
import { EjercicioDies } from './actividades/pages/EjercicioDies.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './AppRouter.jsx'
import { Navbar } from './actividades/pages/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
   <AppRouter/>

    </BrowserRouter>
   
  </React.StrictMode>,
)
