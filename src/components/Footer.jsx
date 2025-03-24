import React from 'react'

function Footer({items}) {



  return (
    <footer>{items} list {items === 1 ? "item" : "Items" }</footer>
  )
}

export default Footer