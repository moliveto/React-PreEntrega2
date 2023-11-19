import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ id, name, brand, category, price, image }) => {
    return (
        <>
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
                    <Button>
                        <Link to={`/item/${id}`}>
                            Details
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>

    )
}

export default Item