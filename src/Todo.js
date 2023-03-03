import React, { useEffect, useState } from "react";
import List from './components/List.js';
import Item from './components/item.js'
import TodoForm from "./components/TodoForm.js";
import Modal from "./components/Modal.js";


const SAVED_ITEMS = "savedItems";
const ITEM_LOCAL_ST =  JSON.parse(localStorage.getItem(SAVED_ITEMS))

function Todo(){
    const [items, setItems] = useState(ITEM_LOCAL_ST || [])
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))

    }, [items])

    function onAddItem(text){

        let it = new Item(text)

        setItems([...items, it])
        setShowModal(false)
    }

    function onItemDeleted(item){
        let filteredItems = items.filter(it=>it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item){

        let updatedItems = items.map(it =>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems)
    }


    function onHideModal(e){
        setShowModal(false)
    }

    return(
        <div className="container text-lg lobster open-sans w-5/6 sm:w-2/3 md:w-2/5 xl:w-1/4 m-auto rounded-lg shadow-xl px-3 xl:p-3 mt-1 lg:mt-3">
            <header className="py-2 header flex justify-between text-center font-semibold">
                <h1 className="py-1 inline-block text-3xl">To Do</h1> 
                <button className="p-1 inline text-3xl text-green-500" onClick={()=> setShowModal(true)}>+</button>
            </header>

            <hr></hr>

            <Modal onHideModal={onHideModal} show={showModal}>
                <TodoForm  onAddItem={onAddItem}></TodoForm>
            </Modal>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        </div>
        )
}

export default Todo;