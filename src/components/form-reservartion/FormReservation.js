import React from 'react'
import { useState } from 'react'

const FormReservation = ({hotelId, hotelName}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startDate: '',
    endDate: '', 
    guests: 1,
  });
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value 
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      ...formData,
      hotelId,
      hotelName,
      createdAt : new Date().toISOString(),
    };
    console.log('Réservation envoyée', reservation)
  }
  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <h3>Je souhaite réserver</h3>
      <input name="name" type="text" placeholder="Nom" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="startDate" type="date" onChange={handleChange} required />
      <input name="endDate" type="date" onChange={handleChange} required />
      <input name="guests" type="number" min="1" value={formData.guests} onChange={handleChange} required />
      <button type="submit">Réserver</button>
    </form>
  );
};


export default FormReservation;