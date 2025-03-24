import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useState } from 'react'
import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem("Todolist"))
      )

      const [newItem,setNewItem] = useState('') // This is for Input value get 

      const [search,setSearch] = useState('')

      // Add New item in List
      const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1
        :1
        const addNewItem = {id, checked:false, item}
        const listItem = [...items, addNewItem]
        setItems(listItem)
        localStorage.setItem("Todolist",JSON.stringify(listItem))
      }
  
      const handleChange = (id) =>{
        const listItem = items.map((item) => 
        item.id===id ? {...item, checked:!item.checked} : item)
        setItems(listItem)
        localStorage.setItem("Todolist",JSON.stringify(listItem))
      }
  
      const handleDelete = (id) =>{
        const listItem = items.filter((item) => 
        !(item.id===id && item.checked))
        setItems(listItem)
        localStorage.setItem("Todolist",JSON.stringify(listItem))
      }

      const handleSubmit = (e) => {
        e.preventDefault() // if anything submit Full page not loaded
        if(!newItem) return
        addItem(newItem)
        setNewItem("") // after adding a new item input blank

      }

  return (
    <div className='App'>
      <Header 
      title="To do list"
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer 
      items={items.length}/>
    </div>
  )
}

export default App
