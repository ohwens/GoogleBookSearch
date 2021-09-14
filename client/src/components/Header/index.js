import React from 'react';
import './style.css'

function Header() {
  return (
    <div className='header text-center border border-2 border-dark rounded my-2 p-4'>
      <h1>
        Google Books Search
      </h1>
      <h4>Search for and Save Your Favorite Books</h4>
    </div>
  )
}

export default Header;