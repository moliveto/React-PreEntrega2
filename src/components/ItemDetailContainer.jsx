import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products.json');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const p = products.find((p) => p.id == id);
    return (
        <>
            {loading ? <p>Loading...</p> :
                <ItemDetail
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    brand={p.brand}
                    category={p.category}
                    price={p.price}
                    image={p.image}
                />}
        </>
    );
};

export default ItemDetailContainer;