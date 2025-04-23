import React, { useState } from 'react'
import HotelsList from '../../components/hotelslist/HotelsList'
import Searchbar from '../../components/searchbar/Searchbar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);  
  }

  return (
    <div>
      <Searchbar onSearch={handleSearch} /> 
      <HotelsList searchTerm={searchTerm} />  
    </div>
  );
}
