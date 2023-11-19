import React from 'react';
// import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, brand, category, price, image }) => {
    return (
        <div key={id}>
            <Center p='1rem'>
                <Card>
                    <CardHeader>
                        <Heading size='md'>{name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>{brand}</Text>
                        <Text>{category}</Text>
                        <Text>{price}</Text>
                        <Text>{image}</Text>
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
