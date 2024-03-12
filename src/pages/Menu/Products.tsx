import "./products.scss";
import  { useEffect, useState } from 'react';
import Card from "./Card"; 

type Product = {
    id: string;
    title: string;
    desc: string;
    price: number;
};

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans')
            .then((response) => response.json())
            .then((json) => {
                console.log("Menu", json);
                setProducts(json.menu || json); 
            })
            .catch((error) => {
                console.error("error", error);
            });
    }, []);

    return (
        <section className='menu-container'>
            <h2>Meny</h2>
            <div className="products-container">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        desc={product.desc}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default Products;