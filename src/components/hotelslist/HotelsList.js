import React, { useEffect, useState } from 'react';
import HotelCard from '../hotelcard/HotelCard';
import './HotelsList.css' 

const HotelsList = ({ searchTerm }) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/db.json')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setHotels(data.hotels); // On récupère tous les hôtels
                setLoading(false);
            })
            .catch(err => {
                console.error('Erreur lors du fetch :', err);
                setLoading(false);
            });
    }, []);

    // Filtrer les hôtels en fonction du terme de recherche
    const filteredHotels = hotels.filter(hotel => {
        return hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
               hotel.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (loading) return <div className='container'><p>Chargement des hôtels...</p></div>;

    return (
        <div className="hotel-list container">
            {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))
            ) : (
                <p>Aucun hôtel trouvé.</p>
            )}
        </div>
    );
}

export default HotelsList;
