import { useParams } from "react-router-dom"
import Card from '../Card/card'

export default function Detalhe() {
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));
    const produto = lista.filter((objeto) => {
        if(objeto.id == id) return objeto;
        else return null;
    })

    console.log(produto[0])

    return (
            <Card produto={produto[0]} />    
    )
}