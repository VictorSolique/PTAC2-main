import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    {/*const [count, setCount] = useState(0);*/}
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Home</h1>
            <Link to="/todo">Link do Todo</Link>
            {/*<button onClick={() => { setCount(count+1)}}>Contar</button>    
            <button onClick={() => { setCount(0)}}>Tirar</button>
            <p>{count}</p>*/}
            <br />
            <input type="text" onChange={(e) => {setName(e.target.value)}}/>             
        </div>
    );
}