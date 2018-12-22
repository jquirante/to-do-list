import React from 'react';
import ListItem from './list_item';

const List = (props) => {
    
    const listElements = props.toDos.map( (item) => {
        console.log('item', item)
        return <ListItem toggle={() => props.toggle (item._id)} delete={() => props.delete(item._id)} complete={item.complete} key={item._id} title={item.title}/>
    });

    return (
            <ul className="collection">
                {listElements}
            </ul>
    )
}


export default List;