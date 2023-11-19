import React from 'react';
// import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ p }) => {
    // const { id } = useParams();
    // const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div key={p.id}>
            <Center p='1rem'>

                <Card>
                    <CardHeader>
                        <Heading size='md'>{p.name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>{p.brand}</Text>
                        <Text>{p.category}</Text>
                        <Text>{p.price}</Text>
                        <Text>{p.image}</Text>
                    </CardBody>
                    <CardFooter>
                        <ItemCount />
                    </CardFooter>
                </Card>
            </Center>
        </div>
    )
}

export default React.memo(ItemDetail);
