import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './Searchbar.css';

const Searchbar = () => {
  const [where, setWhere] = useState();
  return (
    <div className="container container-searchbar">
      <input type="text" placeholder="Où souhaitez-vous aller ?" />
      
      
      <button class="btn-primary" type="submit">Rechercher</button>
    </div>
  );
};

export default Searchbar;
