import { useState } from "react";
import { Link } from "react-router-dom";

const listaImg = [
    {
        nome: "Pão Francês",
        url: "https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_640.jpg",
        preco: parseFloat(4.5).toFixed(2)
    },
    {
        nome: "Feijão",
        url: "https://media.istockphoto.com/id/1361420112/photo/carioca-bean-texture-background.webp?b=1&s=612x612&w=0&k=20&c=g9Ams4PfwOl9ohhevA9YjMntELb_8iD5Tf0gjX_VIHs=",
        preco: parseFloat(5.85).toFixed(2)
    },
    {
        nome: "Arroz",
        url: "https://media.istockphoto.com/id/153737841/photo/rice.webp?b=1&s=612x612&w=0&k=20&c=OiBx6RbgtHr7by4gcILMoTveSLnVVR7FwHItIz1brtY=",
        preco: parseFloat(14.5).toFixed(2)
    },
    {
        nome: "Banana",
        url: "https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_640.jpg",
        preco: parseFloat(8.99).toFixed(2)
    },
    {
        nome: "Farinha de Trigo",
        url: "https://cdn.pixabay.com/photo/2015/01/14/19/20/bake-599521_640.jpg",
        preco: parseFloat(14.99).toFixed(2)
    },
    {
        nome: "Açúcar",
        url: "https://media.istockphoto.com/id/1390646099/photo/a-sugar-spoon.webp?b=1&s=612x612&w=0&k=20&c=wdM9ukqXs9R2ibYYybEa1rZCQ-l5SuY6PeSeQX_Xgg4=",
        preco: parseFloat(11.49).toFixed(2)
    },
    {
        nome: "Café",
        url: "https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_640.jpg",
        preco: parseFloat(16.5).toFixed(2)
    },
    {
        nome: "Leite Integral",
        url: "https://media.istockphoto.com/id/518843282/photo/pouring-milk.jpg?s=612x612&w=0&k=20&c=IVxPvLQ5qMMsz6ach_q-LGeniIpa3KwrPP6bcCIdiSs=",
        preco: parseFloat(6.79).toFixed(2)
    },
    {
        nome: "Cenoura",
        url: "https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_640.jpg",
        preco: parseFloat(11.99).toFixed(2)
    }
    
]

export default function Todo() {
    const[lista, setLista] = useState([]);
    const[atividade, setAtiv] = useState(""); 
    const[id, setId] = useState(Math.random());
    const[preco, setPreco] = useState("");

    const adionaListaImg = (nome, index) => {
        let inputPreco = document.getElementById("inputPreco " + nome).value;
        setLista([...lista, {
            id: index,
            atividade: nome,
            preco: Number(inputPreco)
        }])
        setId(index+1);
        console.log("Adicionou compra com imagem: ", lista, "Código: " + index);
}

    const salvar = (e) => {
        e.preventDefault();
        if(atividade === "" || preco === "") return;
        setLista([...lista, {
            id: id,
            atividade: atividade,
            preco: Number(preco)
        }]);
        setId(id+1);
        setAtiv("");
        setPreco('');
        console.log("Adicionou compra. Código: " + id);
    }
    function remove(id) {
        const listaAux = [...lista];
        const filtra = listaAux.filter(a => (id !== a.id ? lista : null));
        setLista(filtra);
        console.log("Removeu compra. Código: " + id);  
    }
    function removeTudo(e) {
        e.preventDefault();
        setLista([]);
    }
    let precoTotal = () => {
        let total = 0;
        const listaPreco = [...lista];
        listaPreco.forEach((a) => {
            total += a.preco;
        });
        return total.toFixed(2);
    }

    return (
        <div className="container-xl bg-cinza pt-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">toDo</li>
                </ol>
            </nav>

            <h1 className="text-start">Lista de Compra de Supermercado</h1>   
            
            <form onSubmit={salvar} className="row">
                <div className="col mb-2">
                    <input type="text" className="form-control" placeholder="Adicione uma compra na lista" value={atividade} onChange={(e) => setAtiv(e.target.value)}/>
                </div>
                <div className="col-md-auto mb-2">
                    <input type="number" step="any" min={0} className="form-control" placeholder="R$ 0,00" value={preco} onChange={(e) => setPreco(e.target.value)} 
                    />
                </div>
                <div className="col col-lg-2">
                    <button className="btn btn-success" type="submit">ADICIONAR</button>
                </div>
            </form>         
            <div className="px-2 mt-4">
                <div className="row">
                    <div className="col p-2 fonte-phudu">
                    <a onClick={removeTudo} className="under text-danger fs-6" href=""><span className="material-symbols-outlined align-bottom">delete</span>apagar tudo</a>      
                        <div className="card">
                            <div className="card-body pb-0 mb-0">   
                                <h6 className="border-bottom text-center">Lista de Compra</h6>                                
                                {lista.map((atividade) => (
                                    <div className="d-flex justify-content-between border-bottom mb-3">
                                        <div className="me-auto pe-2">
                                            <p className="m-0"> - {atividade.atividade}</p>
                                            <p className="text-danger d-inline"> --&gt; R$</p>
                                            <input type="number" min="0" max="1000" className="border-0 text-danger" placeholder="0,00" value={atividade.preco.toFixed(2)} />
                                        </div>
                                        <button type="button" className="btn-close mx-1 mt-1 " aria-label="Close" onClick={() => remove(atividade.id)}></button> 
                                    </div>
                                ))}
                            </div> 
                            <div className="d-flex justify-content-between container py-2">
                                <span className="fs-4">Preço Total</span>
                                <span className="text-success fw-semibold fs-4">R$ {precoTotal()} </span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col p-2">    
                        <div className="row">
                            <h4 className="fw-light pb-0 mb-0">mais populares</h4>
                            
                            {listaImg.map((item) => (
                                <div className="col-sm-4 mb-2" key={item.id}>
                                    <div className="card shadow">
                                        <img src={item.url} className="card-img-top" alt={item.nome} />
                                        <div className="card-body px-0 text-center">
                                            <p className="card-title">{item.nome}</p>
                                            <div className="input-group mb-3 px-2">
                                                <span className="input-group-text border-0" id="basic-addon1">R$</span>
                                                <input type="number" min={0} className="form-control border-0" placeholder="0,00" defaultValue={item.preco} id={"inputPreco "+ item.nome} />
                                            </div>
                                            <button type="button" className="btn btn-success rounded-5 btn-sm fs-6" onClick={(e) => e.preventDefault(adionaListaImg(item.nome, id))}>Adicionar <span className="material-symbols-outlined align-bottom">add_circle</span></button> 
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}



