import React from 'react'
import Menu from '../menu/Menu'; 
import './Header.css';
export default function Header() {
  return (
    <header>
        <div className="inner-header container">
            <div className="col-left">
                <p className='nom-site'><a href="/">HôtelBook</a></p>            
            </div>
            <div className="col-right">
                <Menu />
            </div> 
        </div>
    </header>
  )
}
