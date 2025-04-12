import React from 'react'
import { useEffect, useState } from 'react';
import HotelCard from '../hotelcard/HotelCard';
import './HotelsList.css'
const HotelsList = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/hotels')
            .then(res => res.json())
            .then(data => {
                setHotels(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Erreur lors du fetch :', err);
                setLoading(false);
            })
    })
    if (loading) return <p>Chargement des hôtels...</p>;
    return (
        <div className="hotel-list container">
            {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
    )
}

export default HotelsList;
