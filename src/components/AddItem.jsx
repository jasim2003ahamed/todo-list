import React from 'react'
import { FaPlus } from "react-icons/fa";

function AddItem({newItem,setNewItem,handleSubmit}) {

  return (
    <form action="" className='addForm' onSubmit={handleSubmit}> 
        <input type="text"
            autoFocus
            placeholder='Add Item'
            id='addItem'
            required 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'><FaPlus />
        </button>
    </form>
  )
}

export default AddItem