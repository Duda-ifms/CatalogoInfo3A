// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`



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
  ]); }
    const[listaFlor, setlistaFlores] = useState([]);
    const adicionarItemFlores = (objeto) => {
        setFlores([...listaFlor,objeto])
    }
      const removerFlor = (id) => {
        let remover = false;
        let listaAux = listaFlores.filter((Flor) => {
            if (remover == false) {
               if (Flor.id !== id){
              } else{
                remover = true;
                return null
              }
            } else{
                return Flor
            
         } 
      });
         setFlores(listaAux);

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
       listaFlores.map((Flor)=>
        <div key= {Flor.id}>
        <p>{Flor.nome}</p>
        <p>{Flor.preco}</p>
        </div>
       )