import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((res) => {
        setCountry(res.data);
      });
  }, [countryId]);

  return (
    <>
      {country && (
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border) => {
                      const foundBorder = countries.find((country) => {
                        return country.alpha3Code === border;
                      });
                      return (
                        <li key={foundBorder.alpha3Code}>
                          <Link to={`/${foundBorder.alpha3Code}`}>
                            {foundBorder.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
