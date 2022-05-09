import React from "react"

import Card from "./components/layout/Card"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./Aleatorio"

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        
        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio maior={100} menor={1}></Aleatorio>
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento></Fragmento>
        </Card>

        <Card titulo="#02 - Com parâmetro">
            <ComParametro
                titulo="Situação do aluno"
                aluno="Pedro Silva"
                nota={9.3} />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>

    </div>

