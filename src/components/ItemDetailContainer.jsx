import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                const jsonData = await response.json();
                setProducts(jsonData);
                console.log(products)
                // const response = await axios.get('/products.json');
                // setProducts(response.data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchProducts()
    }, [])

    console.log(id)
    console.log(products)
    const product = products.find((p) => p.id === id)
    console.log(product)

    return (
        <>
            <ItemDetail
                product={product}
            />
        </>
    )
}

export default ItemDetailContainer