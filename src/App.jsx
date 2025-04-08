import { Products } from './components/Products'
import { products } from './mocks/products'
import './App.css'

function App() {

  return (
    <>
      <Products products={products} />
    </>
  )
}

export default App
