import React from 'react'
import { FaPlus } from "react-icons/fa";

function AddItem({newItem,setNewItem,handleSubmit}) {

  return (
    <form className='addForm'  onSubmit={handleSubmit}> 
        <label htmlFor="addItem" >AddItem</label>
        <input type="text"
            autoFocus
            placeholder='Add Item'
            id='addItem'
            required 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'><FaPlus />
        </button>
    </form>
  )
}

export default AddItem