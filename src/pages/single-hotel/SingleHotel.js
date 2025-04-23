import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './SingleHotel.css';  
import BackHome from '../../components/back-home/BackHome'; 
import FormReservation from '../../components/form-reservartion/FormReservation';
export default function SingleHotel() {
  // Fonction pour créer un slug à partir du nom de l'hôtel
  const slugify = (str) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const { slug } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    // Récupérer les données des hôtels
    fetch('/db.json') 
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        const foundHotel = data.hotels.find(h => slugify(h.name) === slug);
        setHotel(foundHotel);
      })
      .catch(err => {
        console.error('Erreur lors du fetch :', err);
      });
  }, [slug]);

  return (
    <div className="container">
      {hotel ? (
        <div className="single-hotel">
          <div className="container-hotel">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          </div>
          
          <div className="sidebar-hotel">
            
            <div className="hotel-info">
              <h1>{hotel.name}</h1>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-rating">⭐ {hotel.rating} / 5</p>
              <p className="hotel-price"><strong>{hotel.pricePerNight}</strong>€ / nuit</p>
            </div>
            <p className="hotel-description">{hotel.description}</p>
            {hotel.available ? (
              <FormReservation hotelId={hotel.id} hotelName={hotel.name}/>
            ) : (
              <p className="not-available">Cet hôtel n’est pas disponible actuellement</p>
            )}
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )} 
      <BackHome />
    </div>
  );
}
