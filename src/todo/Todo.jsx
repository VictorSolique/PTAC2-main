import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo() {
    const[lista, setLista] = useState([]);
    const[atividade, setAtiv] = useState("");
    const[id, setId] = useState(1);

    const salvar = (a) => {
        a.preventDefault();
        setLista([...lista, {
            id: id,
            atividade: atividade
        }]);
        setId(id+1);  
        setAtiv("");
    }
    return (
        <div class="align-middle">
            <h1 class="text-dark fs-2"> Página ToDo</h1>
            <Link to="/" >link do todo</Link>
            <h2>Adicione Items a lista</h2>
            <form onSubmit={salvar} class="flex align-center">
                <input type="text" value={atividade} onChange={(e) => setAtiv(e.target.value)} />
                <button class="btn btn-danger rounded-3 m-2">ADIOCINAR</button>
            </form>
            <div>
                {lista.map((atividade) => <p key={atividade.id}> - {atividade.atividade}</p>)}
            </div>
        </div>
        
    );
}