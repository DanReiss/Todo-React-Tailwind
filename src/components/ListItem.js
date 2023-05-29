import React from 'react'

function ListItem(props){
    const doneClass = props.item.done ? "done italic line-through text-green-500" : ""

    return (
        <li className={`${doneClass} max-w-full grid grid-cols-[minmax(0,_1fr)_25px_25px] gap-2 text-xl py-3`}>
            <span className='block'>{props.item.text}</span>     
            <button onClick={()=> {props.onDone(props.item)}}><i className="fa-solid fa-check"></i></button>
            <button className='pr-1' onClick={()=> { props.onItemDeleted(props.item)}}><i className="fa-solid fa-xmark"></i></button>        
        </li>
    )
}


export default ListItem;