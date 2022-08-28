import './App.css';

import { useState, useEffect } from "react";

// API
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {

      const res = await fetch(url);

      const data = await res.json();

      setProducts(data)
    }

    fetchData();
  }, []);

  // 2 - Adicionando dados

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    console.log(product)
  };

  // console.log(products)

  return (

    <div className="App">
      <h1>Lista de produtos</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}> {product.name} - {product.price}</li>
        ))}
      </ul>
      
      <div className='add-dados'>

        <form onSubmit={handleSubmit}>

          <label>
            Nome:
            <input type="text"
              value={name}
              name={name}
              onChange={(e) => setName(e.target.name)} />
          </label>

          <label>
            Preço:
            <input type="text"
              value={price}
              name={price}
              onChange={(e) => setPrice(e.target.price)} />
          </label>

          <input type="submit" value="Enviar para o json" />

        </form>

      </div>

    </div>
  );
}

export default App;
