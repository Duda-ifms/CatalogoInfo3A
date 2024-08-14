// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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


   
