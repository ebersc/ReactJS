import "./App.css"
import React from "react"

import Card from "./components/layout/Card"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./Aleatorio"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#07 - Desafio Repeticao" color="#ff432e">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repeticao" color="#FF4c65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#00c8f8">
                <Familia sobrenome="Santos">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>
            
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio maior={100} menor={1}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Com parâmetro" color="#E8b71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588c73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

