import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ProductContainer from './components/ProductContainer'
import ProductForm from './components/ProductForm'
import Contact from './components/Contact'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import EditProductForm from './components/EditProductForm'

function App() {

  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState([])

  useEffect(() => {
    fetch('/products')
    .then((res) => res.json())
    .then(setProducts)
  }, [])

  console.log(products)

  function handleAddtoProducts(obj){
    setProducts([...products, obj])
  }

  function handleEditProducts(obj){
    setEditProduct(products.map(prodObj => prodObj.id === obj.id ? obj : prodObj))
  }

  function handleProductDelete(id){
    fetch(`/products/${id}`, {
      method: 'DELETE'
    })
    let updatedProducts = products.filter(prodObj => prodObj.id !== id)
    setProducts(updatedProducts)
  }
  return (
    <div>
      <NavBar/>

      <div>
        <Routes>
          <Route
            path='/'
            element ={<ProductContainer product={products} setEditProduct={setEditProduct} handleProductDelete={handleProductDelete} />}
          />

          <Route
            path='/addnewproduct'
            element ={<ProductForm addProducts={handleAddtoProducts}/>}
          />

          <Route
            path='/contact'
            element ={<Contact/>}
          />

          <Route
            path='/editproduct'
            element ={<EditProductForm editProduct={editProduct} handleEditProducts={handleEditProducts}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
