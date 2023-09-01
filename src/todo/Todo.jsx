import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo() {
    const[lista, setLista] = useState([]);
    const[atividade, setAtiv] = useState("");
    const[id, setId] = useState(Math.random());

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id: id,
            atividade: atividade
        }]);
        setId(id+1);
        setAtiv("");
    }
    function remove(id) {
        const listaAux = [...lista];
        const filtra = listaAux.filter(a => (id !== a.id ? lista : null));
        setLista(filtra);
        console.log(filtra, listaAux, id, "Está rondando");  
    }
    return (
        <div>
            <h1>Todo</h1>
            <Link to="/">Link do todo</Link>
            <form onSubmit={salvar}>
                <input type="text" value={atividade} onChange={(e) => setAtiv(e.target.value)} />
                <button>ADD</button>
            </form>
            {lista.map((atividade) => (
                <div key={atividade.id} class="ms-2">
                    <span> - {atividade.atividade}</span>
                    <button type="button" class="btn-close m-2" aria-label="Close" onClick={() => remove(atividade.id)}></button>
                </div>
            ))}
        </div>
    );
}