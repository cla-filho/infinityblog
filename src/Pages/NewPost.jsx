
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";
const NewPost = () => {
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [corpo, setCorpo] = useState("");

    const createPost = async (e) => {
        e.preventDefault();
        const post = { titulo, corpo };
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        };

        const url = "http://localhost:3000/posts";
        await fetch(url, config);
        navigate("/");
    };
    return (
        <div className="new-post">
            <h2>Inserir novo post:</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className="form-control">
                    <label>Título: </label>
                    <input type="text"
                        placeholder="Digite o título"
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label>Conteúdo: </label>
                    <textarea
                        placeholder="Digite o conteúdo"
                        onChange={(e) => setCorpo(e.target.value)}
                    />
                </div>
                <input type="submit" value="Criar post" className="btn" />
            </form>
        </div>
    )
}

export default NewPost;