import React from 'react';
import CarregandoImg from "../../imagens/1481.gif";
import "./Carregando.css";

const Carregando = () => {
    return(
        <div className='loader flex flex-c'>
            <img src= {CarregandoImg} alt="carregando" />
        </div>
    )
}

export default Carregando