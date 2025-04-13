import React from 'react'
import { useEffect, useState } from 'react';
import HotelCard from '../hotelcard/HotelCard';
import './HotelsList.css' 
const HotelsList = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/db.json')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setHotels(data.hotels); // <-- ici, important !
                setLoading(false);
            })
            .catch(err => {
                console.error('Erreur lors du fetch :', err);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <div className='container'><p>Chargement des hôtels...</p></div>;
    return (
        <div className="hotel-list container">
            {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
    )
}

export default HotelsList;
