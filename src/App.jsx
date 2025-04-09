import { useState } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { products as initialProducts } from "./mocks/products";
import { useFilters } from "./hooks/useFilters";
import "./App.css";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
