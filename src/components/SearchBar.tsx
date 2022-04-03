import React from 'react'

const SearchBar = () => {
  return (
    <form>
        <div>
            <input type="text" placeholder='Search' />
        </div>
        <div>
            <label>
                <input type="checkbox" />
                Only show products in stock
            </label>
        </div>
    </form>
  )
}

export default SearchBar