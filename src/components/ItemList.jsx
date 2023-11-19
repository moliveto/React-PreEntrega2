import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        brand={p.brand}
                        category={p.category}
                        price={p.price}
                        image={p.image}
                    />
                )
            })

            }
        </>
    )
}

//export default React.memo(ItemList)
export default ItemList;