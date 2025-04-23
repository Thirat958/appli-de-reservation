import React from 'react';
import './HotelCard.css';
import { Link } from 'react-router';
import PrimaryButton from '../primary-button/PrimaryButton';
export default function HotelCard({ hotel }) {
  const slugify = (str) =>
    str
      .toLowerCase()
      .normalize('NFD') // Enlève les accents
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-') // Remplace les non-alphanum par des tirets
      .replace(/^-+|-+$/g, ''); // Trim des tirets au début/fin
  
  return (
    <div className='hotel-card'>
        <img src={hotel.image} alt={hotel.name} />
        <div className="content-card">
            <p className="title-hotel">{hotel.name}</p>
            <p className="location-hotel">{hotel.location}</p>
            <p className="price-hotel">Prix par nuit : {hotel.pricePerNight}€</p>
            <p className="note-hotel">Note : {hotel.rating}⭐</p> 
            <Link to={`/hotel/${slugify(hotel.name)}`}>
              <PrimaryButton>
                Voir l'hôtel
              </PrimaryButton>
            </Link>
        </div>
    </div>
  )
}
