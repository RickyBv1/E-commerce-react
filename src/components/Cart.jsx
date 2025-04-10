import { ClearCartIcon, CartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css";

export function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor="cart">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
              alt="Dolce Shine perfume"
            />
            <div>
              <h3>Dolce Shine perfume</h3> - $69.99
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
