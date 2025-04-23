import React from 'react'
import './BackHome.css';
import { Link } from 'react-router';
export default function BackHome() {
    return ( 
        <Link className='back-home' to="/"> 
            <i class="fa-solid fa-arrow-left"></i> Retour à l'accueil 
        </Link>
  )
}
