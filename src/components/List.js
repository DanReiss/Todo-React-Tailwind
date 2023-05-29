import React from 'react';
import ListItem from './ListItem.js';

function List(props){
    return (
        <ul>
            {
            props.items.map(item =>{
            return(
                <ListItem 
                    onDone={props.onDone} 
                    onItemDeleted={props.onItemDeleted} 
                    item={item}
                    key={item.id}>
                </ListItem>)}
            )}
        </ul>
    )
}

export default List;