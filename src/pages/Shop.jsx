
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { ReactComponent as Arrow } from "../assets/arrow.svg"

const Shop = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const loadItems = async() => {
            try {
                setIsLoading(true);

                await fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setItems(json));

                setIsLoading(false);
            } catch (err) {
                setErr(true);
            }
        }
            loadItems();
    }, []);

    return (
        <section id="shopSection" className="shop">
            <div className="shop-titles">
                <h2>Best selling</h2>
                <p>Get in on the trend with our curated selection of best-selling styles.</p>
            </div>

            <div className="cards">
                {(isClicked == false )
                    ? items.slice(0, 3).map((item) => (
                        <Card
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating.rate}
                        />
                    ))
                    : items.slice(0, 9).map((item, index) => (
                        <Card
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating.rate}
                        />
                    ))
                }
            </div>

            {(isClicked === false)
            ? <div className="secondary-btn" onClick={() => setIsClicked(true)}>
                <span>See all</span>
                <Arrow />
            </div>
            : null
            } 
        </section>
    )
}

export default Shop;