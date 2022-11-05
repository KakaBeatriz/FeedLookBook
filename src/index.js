import React from 'react';
import ReactDOM from 'react-dom/client';
import{
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Feed from "./pages/Feed/pageFeed";
import ListaLivros from "./components/ListaLivros/ListaLivros";
import DetalhesLivro from "./components/DetalhesLivro/DetalhesLivro";
import Biblioteca from './pages/Biblioteca/Biblioteca';
import Troca from './pages/Troca/Troca';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Biblioteca />}/> 
        <Route path = "feed" element = {<Feed />} />
        <Route path = "book" element = {<ListaLivros />} />
        <Route path = "/book/:id" element = {<DetalhesLivro/>}/>
        <Route path = "troca" element = {<Troca/>} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
  
);
