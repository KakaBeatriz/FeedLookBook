import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';


const Biblioteca = () => {
    return(<div className='Biblioteca'>
        <main>
    
            <Header/>
            <Outlet/>
        </main>
        </div>
    )
}

export default Biblioteca