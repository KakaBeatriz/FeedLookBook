import React from 'react';
import { useGlobalContext } from '../../context';
import Book from '../ListaLivros/Livro';
import Carregando from '../Carregando/Carregando';
import coverImg from '../../imagens/capa_nao_disponivel.png';
import "./ListaLivros.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const ListaLivros = () => {
    const {books, loading, resultTitle} = useGlobalContext();
    const navigate = useNavigate();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            // remover /works/ to get only id (só obter o id nos resultados)
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        }
    });

    if(loading) return <Carregando/>;


    return(
        <section className='bookList'>
            <div className='container'>
            <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
                    <FaArrowLeft size={22} />
                    <span className='fs-18 fw-6'>Voltar</span>
            </button>

                <div className='section-title'>
                <h2> {resultTitle} </h2>
                </div>
                <div className='booklist-content grid'>
                {
                    booksWithCovers.slice(0, 30).map((item, index) => {
                        return (
                            <Book key={index} {...item} />
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default ListaLivros