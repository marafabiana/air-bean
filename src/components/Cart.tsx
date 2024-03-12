import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import HeaderTop from "../assets/header-top.svg";
import EllipseQuantity from "../assets/ellipse-quantity.svg";
import Ellipse from "../assets/ellipse.svg";
import BagIcon from "../assets/bag.svg";
import NavIcon from "../assets/navicon.svg";
import { useCartStore } from '../store/Store';
import CartPayment from '../components/CartPayment';
import "./cart.scss";

const Cart = () => {
    const [showCartPayment, setShowCartPayment] = useState(false);
    const { items } = useCartStore();
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const navigate = useNavigate();

    const toggleCartPayment = () => setShowCartPayment(!showCartPayment);

    return (
        <div>
            <div className='header-top-container'>
                <img src={HeaderTop} alt="Header Icon" />
            </div>

            <section className='header-top-nav-bag'>
                <div className='nav-icon'>
                    <img src={NavIcon} onClick={() => navigate('/nav')} alt="Nav Icon" />
                </div>
                <div className='bag-icon' onClick={toggleCartPayment}>
                    <section className='icon-wrapper'>
                        <img src={Ellipse} alt="" className='ellipse'/>
                        <img src={BagIcon} alt="" className='bag' />
                    </section>
                    <section className='icon-wrapper-quantity'>
                        <span>{totalItems}</span>
                        <img className='ellipse-quantity' src={EllipseQuantity} alt="" />
                    </section>
                </div>
            </section>
            
            {showCartPayment && (
                <div className="dark-background" onClick={toggleCartPayment}>
                    <div className="overlay" onClick={(e) => e.stopPropagation()}>
                        <CartPayment />
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default Cart;