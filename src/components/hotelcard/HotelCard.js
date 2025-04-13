import React from 'react';
import './HotelCard.css';
import { Link } from 'react-router';
import PrimaryButton from '../primary-button/PrimaryButton';
export default function HotelCard({ hotel }) {
  return (
    <div className='hotel-card'>
        <img src={hotel.image} alt={hotel.name} />
        <div className="content-card">
            <p className="title-hotel">{hotel.name}</p>
            <p className="location-hotel">{hotel.location}</p>
            <p className="price-hotel">Prix par nuit : {hotel.pricePerNight}€</p>
            <p className="note-hotel">Note : {hotel.rating}⭐</p> 
            <Link to={`/hotel/${hotel.id}`}>
              <PrimaryButton>
                Voir l'hôtel
              </PrimaryButton>
            </Link>
        </div>
    </div>
  )
}
