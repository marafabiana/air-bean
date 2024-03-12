import { useNavigate } from 'react-router-dom';
// Global State
import { useCartStore } from '../store/Store'; 
import PlusIcon from "../assets/vectorPlus.svg";
import LessIcon from "../assets/vectorLess.svg";
import TakeMyMoney from "../assets/take-my-money.svg";
import TakeMyMoneyRetangle from "../assets/rectangle22.svg";
import "./cartPayment.scss";

const CartPayment = () => {
    const navigate = useNavigate();
    const { items, increment, decrement, clearCart } = useCartStore();
    const totalCost = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    //Status page
    const handlePayment = () => {
        // Data structure provided in the API description
        const orderData = {
            details: {
                order: items.map(item => ({
                    name: item.title,
                    price: item.price
                }))
            } 
        };

        fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })

        .then(response => response.json())
        .then(data => {
            console.log('Data', data) 
            clearCart();
            navigate('/status', { state: { eta: data.eta, orderNr: data.orderNr } });
        });
    };

    return (
        <div className="overlay">

            <h4>Din beställning</h4>
            
            <section className='payment-items'>
            {items.map((item) => (

                    <div key={item.id} className="cart-item">

                        <div>
                            <span><h5>{item.title}</h5>{item.price} kr</span>
                        </div>

                        <div className="cart-item-actions">
                            <button className='btn-inc-dec' onClick={() => increment(item.id)}>
                                <img src={PlusIcon} alt="Increment" />
                            </button>
                            <span>{item.quantity}</span>
                            <button className='btn-inc-dec' onClick={() => decrement(item.id)}>
                                <img src={LessIcon} alt="Decrement" />
                            </button>
                        </div>

                    </div>
                ))}

                <div className='total-container'>
                    <section>
                        <h5>Total:</h5>
                        <p>inkl moms + drönarleverans</p>
                    </section>
                    
                    <section><h5>{totalCost.toFixed(2)} kr</h5></section>
                </div>
                
                <button className='btn-payment' onClick={handlePayment}> <img className='tmm-one' src={TakeMyMoneyRetangle}alt="" /> <img className='tmm-two' src={TakeMyMoney} alt="" />
                </button>
                    
            </section>

        </div>
    );
};

export default CartPayment;
