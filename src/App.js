import './App.css';

import { useState, useEffect } from "react";

// 4 - custom hook
import {useFetch} from "./hooks/useFetch";

// API
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

// 4 - custom hook

const {data: items, httpConfig, loading } = useFetch(url);


// console.log(data)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {

  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data)
  //   }

  //   fetchData();
  // }, []);

  // 2 - Adicionando dados

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // 5 - refatoranto post
    httpConfig(product, "POST")

    setName("");
    setPrice("");



    console.log(product)
  };

  // console.log(products)

  return (

    <div className="App">
      <h1>Lista de produtos</h1>

      {/* 6 - loading */}

      {loading && <p>Carregando...</p>}
      {!loading && (<ul>
        {items && items.map((product) => (
          <li key={product.id}> {product.name} - {product.price}</li>
        ))}
      </ul>)}
      

      <div className='add-dados'>

        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />

        </form>

      </div>

    </div>
  );
}

export default App;
