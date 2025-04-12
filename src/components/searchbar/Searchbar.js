import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Searchbar.css';

const Searchbar = () => {
  const [startDate, setStartDate] = useState(null); // Date de début
  const [endDate, setEndDate] = useState(null); // Date de fin
  const [numTravelers, setNumTravelers] = useState(1); // Nombre de voyageurs (défaut à 1)

  return (
    <div className="container container-searchbar">
      <input type="text" placeholder="Où souhaitez-vous aller ?" />
      
      <div className="date-picker-container"> 
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Date de début"
        />
      </div>
      
      <div className="date-picker-container"> 
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Date de fin"
        />
      </div>
 
      <div className="travelers-container"> 
        <select 
          value={numTravelers} 
          onChange={(e) => setNumTravelers(e.target.value)}
        > 
          {[...Array(10).keys()].map(i => (
            <option key={i} value={i + 1}>{i + 1} personne{(i + 1) > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      
      <button type="submit">Rechercher</button>
    </div>
  );
};

export default Searchbar;
