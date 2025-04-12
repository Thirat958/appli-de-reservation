import React from 'react';
import './HotelCard.css';


export default function HotelCard({ hotel }) {
  return (
    <div className='hotel-card'>
        <img src={hotel.image} alt={hotel.name} />
        <div className="content-card">
            <p className="title-hotel">{hotel.name}</p>
            <p className="location-hotel">{hotel.location}</p>
            <p className="price-hotel">Prix par nuit : {hotel.pricePerNight}€</p>
            <p className="note-hotel">Note : {hotel.rating}⭐</p>
            <p className="available-hotel" style={{ color: hotel.available ? 'green' : 'red' }}>
            {hotel.available ? "Disponible" : "Complet"}
            </p>
        </div>
    </div>
  )
}
