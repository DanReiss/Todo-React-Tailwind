import React from 'react'

function ListItem(props){
    const doneClass = props.item.done ? "done italic line-through text-green-500" : ""

    return (<li className={`${doneClass} flex justify-between items-center`}>
              <span className='inline-block h-3/4'>{props.item.text}</span>  
        <div className='py-3'>
            <button className='mx-2 text-xl' onClick={()=> { props.onDone(props.item)}}><i className="fa-solid fa-check"></i></button>
            <button className='mx-2 text-xl' onClick={()=> { props.onItemDeleted(props.item)}}><i className="fa-solid fa-xmark"></i></button>        
        </div>
    </li>)
}


export default ListItem;