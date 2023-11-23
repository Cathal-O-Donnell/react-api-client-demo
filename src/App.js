import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CountryInfo from './components/CountryInfo';
import CountryInfoAPIService from './Services/CountryInfoAPIService';
import FetchClient from './ServiceClient/FetchClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [country, setCountry] = useState(null);
  const countryInfoAPIService = new CountryInfoAPIService(FetchClient);

  const fetchData = async (countryName) => {
    try {
      if (countryName !== '') {
        const response = await countryInfoAPIService.getCountryInfo(countryName);
        setCountry(response[0]);
      } else {
        setCountry(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searchTermChangeHandler = (searchTerm) => {
    fetchData(searchTerm);
  };

  return (
    <div className="container p-4 ">
      <SearchBar onChangeSearchTerm={searchTermChangeHandler} />
      {country && <CountryInfo country={country} />}
    </div>
  );
}

export default App;