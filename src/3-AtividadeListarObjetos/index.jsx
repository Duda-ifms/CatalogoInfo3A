// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

import { useState} from "react";
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

    return(
        <div>
            <h1>Floricultura</h1>
        </div>
    );
}

    listaFlores.map((Flor)=>
      <div key= {Flor.id}>
      <p>{Flor.nome}</p>
      <p>{Flor.preco}</p>
  
    </div>
    )
    