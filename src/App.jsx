import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { products as initialProducts } from "./mocks/products";
import { useFilters } from "./hooks/useFilters";
import "./App.css";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
