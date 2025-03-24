import React from 'react';
import { FaTrashCan } from "react-icons/fa6";

function Content({items,handleChange,handleDelete}) {

  return (
    <main >
      {(items.length) ? (
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>


              <input id='item'
              type="checkbox"
              onChange={() => handleChange(item.id)}
              checked={item.checked} 
              />


              <label htmlFor='item'
              onDoubleClick={() => handleChange(item.id)}>
              {item.item}
              </label>

              
              
              <FaTrashCan 
                role='button'
                onClick={() => handleDelete(item.id)}/>
            </li>

          ))}
        </ul>
     ):(
      <p>Your list is Empty</p>
     )}
    </main>
  )
}

export default Content