import React from "react";

export default function Aleatorio(props) {
    let maior = props.maior;
    let menor = props.menor;
    
    return(
        <div>Número gerado {getRandom(menor, maior)}</div>
    );
}

function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}