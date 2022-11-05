import React from 'react';

import { Link } from 'react-router-dom';
import "./ListaLivros.css";

const Livro = (book) => {
    return(
        <div className='book-item flex flex-column flex-sb'>
            <div className='book-item-img'>
                <img src={book.cover_img} alt="cover" />
            </div>
            <div className='book-item-info text-center'>
                <Link to = {`/book/${book.id}`} {...book}>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{book.title}</span>
                    </div>
                </Link>

                <div className='book-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Autor: </span>
                    <span>{book.author}</span>
                </div>

                <div className='book-item-info-item edition-count fs-15'>
                    <span className='text-capitalize fw-7'>Quantidade de Edições: </span>
                    <span>{book.edition_count}</span>
                </div>

                <div className='book-item-info-item publish-year fs-15'>
                    <span className='text-capitalize fw-7'>Ano de Publicação: </span>
                    <span>{book.first_publish_year}</span>
                </div>
                
                <button type='button' className='flex flex-c have-btn' /*onClick={() => }*/>
                    <span className='fs-16 fw-6'>Tenho para troca</span>
                </button>

                <button type='button' className='flex flex-c wanna-btn' /*onClick={() => }*/>
                <span className='fs-16 fw-6'>Procuro</span>
                </button>

            </div>
        </div>
    )
}

export default Livro