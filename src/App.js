import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((res) => {
      setCountries(res.data)
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />

          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
