import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ItemListContainer = () => {
    const { category } = useParams()

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await fetch('/products.json');
                // const jsonData = await response.json();
                // setProducts(jsonData);

                const response = await axios.get('/products.json');
                setProducts(response.data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchProducts()
    }, [])

    // const productos = [
    //     { id: 1, name: "Producto A", description: "Descripcion de Producto A", stock: 5, category: "cat1" },
    //     { id: 2, name: "Producto B", description: "Descripcion de Producto B", stock: 10, category: "cat2" },
    //     { id: 3, name: "Producto C", description: "Descripcion de Producto C", stock: 20, category: "cat3" },
    //     { id: 4, name: "Producto D", description: "Descripcion de Producto D", stock: 15, category: "cat1" },
    //     { id: 5, name: "Producto E", description: "Descripcion de Producto E", stock: 25, category: "cat1" },
    //     { id: 6, name: "Producto F", description: "Descripcion de Producto F", stock: 30, category: "cat3" },
    // ]

    // const getProductos = new Promise((resolve, reject) => {
    //     if (productos.length > 0) {
    //         setTimeout(() => {
    //             resolve(productos)
    //         }, 2000)
    //     } else {
    //         reject(new Error("No hay datos"))
    //     }
    // })

    // getProductos
    //     .then((res) => {
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    var filteredProducts = []
    if (category)
        filteredProducts = products.filter((product) => product.category === category);
    else
        filteredProducts = products;

    return (
        <>
            <Center p='1rem'>
                <ItemList
                    productos={filteredProducts}
                />
            </Center>
        </>
    )
}

export default ItemListContainer