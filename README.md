# infinityblog

projeto simples de um blog feito em aula junto com react na infinity school
https://www.invertexto.com/619aula46

--------------------------

{
    "posts": [
        {
            "titulo": "Titulo do post 1",
            "corpo": "Conteúdo do post 1"
        },
        {
            "titulo": "Titulo do post 2",
            "corpo": "Conteúdo do post 2"
        }
    ]
}

----------- App.jsx 

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {

  return (
    <div className="app">
      
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


---------------- Home.jsx 

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
    // Criando state que armazenará os posts da API
    const [posts, setPosts] = useState([]);

    // Função de busca na API
    const getPosts = async (url) => {
        // Realizando requisição na API
        const response = await fetch(url);
        // Convertendo os dados da resposta para json
        const data = await response.json();
        setPosts(data)
    }

    // Executando a função getPosts através de useEffect
    useEffect(() => {
        const url = "http://localhost:3000/posts"
        getPosts(url);
    }, [])
    return (
        <div className="home">
            <h1>Últimos posts</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.titulo}</h2>
                    <p>{post.corpo}</p>
                    <Link className="btn" to={`/posts/${post.id}`}>
                        Ler mais
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Home;
// material icon theme 

----------- Navbar.jsx

import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>
                <Link to={`/`}>Infinity Blog</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/new`} className="new-btn">
                        Novo Post
                    </Link>
                </li>
                <li>
                    <Link to={`/admin`}>Gerenciar</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
----------------------------------
projetosfortal@infinityschool.com.br
Turma DFS 619
corpo:claudio

