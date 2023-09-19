import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="bg-cinza">
            <div className="container pt-2 bg-white text-center">
                <h2 className="pt-5">Montador de Lista de compra de Supermercado</h2>
                <p className="fs-6">Faça suas compras de supermercado de forma eficiente: <br/> monte sua lista de compras como ponto de partida.</p>
                <Link to="/todo" className="btn btn-success">Montar lista de compra</Link>

                <img src="https://klinio.com/blog/app/uploads/2021/06/5zS8XZHkJbWCKU9UgYGEf8FoMqY7dv6MI8iMbnmy.png" alt="Variedades de comidas saltando em fundo branco" className="img-fluid mx-auto d-block" />
            </div>
        </div>
    );
}