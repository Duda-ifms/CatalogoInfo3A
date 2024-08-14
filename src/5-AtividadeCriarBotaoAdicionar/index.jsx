// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import { useState } from "react";

export default function Home() {

  const [listaFlores, setFlores] = useState([
    { 
      id: 1,
      item: "Flor Rosa",
      preco: "R$ 19,00"
      },
      {
        id: 2,
        item: "Flor Viotela",
        preco: "R$ 10,00"
      },
      {
        id: 3,
        item: "Flor Tulipa",
        preco: "29,00"
      },
  ]);
    const[listaFlor, setlistaFlores] = useState([]);
    const adicionarItemFlores = (objeto) => {
        setFlores([...listaFlor,objeto])
    }

  return (
    <div>
         <h1>Floricultura</h1>
    </div>
   
    );}
      
    listaFlores.map((Flor)=>
      <div key= {Flor.id}>
      <p>{Flor.nome}</p>
      <p>{Flor.preco}</p>
      <button onClick={()=> adicionarItemFlores(Flor)}>Selecionar</button>
    </div>
    )
    