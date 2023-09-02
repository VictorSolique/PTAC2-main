import { useState } from "react";
import { Link } from "react-router-dom";


export default function Todo() {
    const[lista, setLista] = useState([]);
    const[atividade, setAtiv] = useState("");
    const[id, setId] = useState(Math.random());

    const salvar = (e) => {
        e.preventDefault();
        if(atividade === "") return;
        setLista([...lista, {
            id: id,
            atividade: atividade.charAt(0).toUpperCase() + atividade.slice(1)
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
    function removeTudo(e) {
        e.preventDefault();
        return setLista([]);
    }
    

    return (
        <div class="container bg-cinza pt-4">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">toDo</li>
                </ol>
            </nav>
            
            <h1 class="text-start">Lista de Atividades</h1>
            <form onSubmit={salvar} class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Adicione uma comida na lista" aria-describedby="button-addon2" value={atividade} onChange={(e) => setAtiv(e.target.value)} />
                <button class="btn btn-success">ADICIONAR</button>
            </form>
            <div class="container">
                
                <div class="row">    
                <a onClick={removeTudo} class="text-end text-danger fs-6"><span class="material-symbols-outlined">delete</span></a>              
                {lista.map((atividade) => (
                    <div key={atividade.id} class="col-sm-4 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">{atividade.atividade}</h4>
                                <button type="button" class="btn-close m-2" aria-label="Close" onClick={() => remove(atividade.id)}></button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div> 
        </div>
    );
}