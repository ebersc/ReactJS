import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./Aleatorio"

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio maior={10} menor={1}></Aleatorio>
        <Fragmento></Fragmento>
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro Silva"
            nota={9.3} />
        <Primeiro></Primeiro>
    </div>

