import { Link } from 'react-router-dom'

const CountriesList = ({ countries }) => {

  return (
        <div className="col-5" style={{ maxHeight: '70vh', overflow: 'scroll' }}>
          <div className="list-group">
          {countries.map((country) => {
            return <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">{country.name.common}</Link>
          })}
          </div>
        </div>
  );
};

export default CountriesList;
