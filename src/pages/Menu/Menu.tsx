import "./menu.scss"
import Products from "../Menu/Products";
import Cart from '../../components/Cart';

import Footer from "../../components/Footer";

const Menu = () => {
  return (
    <div>
      <Cart />
      <Products />
      <Footer />
    </div>
  )
}

export default Menu