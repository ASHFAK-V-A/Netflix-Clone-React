import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='header'>
        <nav>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <div>
                <button className='lng-btn'>English <img src="/images/down-icon.png"/> </button>
                <button>Sign In</button>
            </div>
        </nav>


    </div>

  )
}

export default NavBar
