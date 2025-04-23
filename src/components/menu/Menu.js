import React from 'react'; 
import './Menu.css';
import { Link } from 'react-router';
import { useAuth } from '../../context/authContext';

export default function Menu () {
    
    const { user } = useAuth();  
    const linksMenu = [
        {
            title: 'Accueil',
            link: '/',
            statut: 'both',
        },
        {
            title: 'Réservations',
            link: '/reservations',
            statut: 'login',
        },
        {
            title: 'Connexion',
            link: '/connexion',
            statut: 'logout',
        },
        {
            title: 'Inscription',
            link: '/inscription',
            statut: 'both',
        },
        {
            title: 'Aide',
            link: '/',
            statut: 'both',
        },
        {
            title: 'Se déconnecter',
            link: '/deconnexion',
            statut: 'login',
        },
    ]
    const visibleLinks = linksMenu.filter(link => {
        if (link.statut === 'both') return true;
        if (link.statut === 'login') return !!user;
        if (link.statut === 'logout') return !user;
        return false;
    });
  return (
    <menu>
        <ul>
            {visibleLinks.map((linkMenu) => (
                <li key={linkMenu.title}>
                <Link to={linkMenu.link}>
                    {linkMenu.title}
                </Link>
                </li>
            ))}
        </ul>

    </menu>
  )
}
