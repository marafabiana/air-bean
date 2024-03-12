import { useCartStore } from "../../store/Store";
import AddButton from "../../assets/add.svg";
import "./card.scss";


type Props = {
    id: string;
    title: string;
    price: number;
    desc: string;
};

const Card = ({ id, title, desc, price }: Props) => {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <article className="card-container">

            <section className="card-container-items">
                <button onClick={() => addToCart(id, title, price)}> <img src={AddButton} alt="" /></button>
                
                <section>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </section>
            </section>
            
            <section className="price-container">
                <h5>{price} kr</h5> 
            </section>

        </article>
    );
};

export default Card;