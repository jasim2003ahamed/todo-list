import React from 'react'

function SearchItem({search,setSearch}) {
  return (
    <form action="" className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Search">Search</label>
        <input type="text"
            id='Search'
            role='submit'
            placeholder='Search Item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem