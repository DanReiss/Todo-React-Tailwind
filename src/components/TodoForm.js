
import React, { useState } from "react";

function TodoForm(props){

    const [text, setText] = useState("");

    function handleChange(e){
        let text = e.target.value;
        setText(text)
    }

    function addItem(e){
        e.preventDefault();
        if(text){
            props.onAddItem(text)
            setText("");
        }
    }

    return (
        <form className="py-2 flex justify-between">
            <input onChange={handleChange} type="text" value={text}  className="p-1 w-2/3 xl:w-4/5 border rounded-lg"></input>
            <button onClick={addItem} className="p-1 mx-0 border rounded-lg font-medium transition-colors hover:bg-green-400 hover:text-white focus:text-white focus:bg-green-400 active:bg-white">Add</button>
        </form>
    )
}


export default TodoForm;