import React from "react";
import { Link } from "react-router-dom";

export default function ShowAllCountries({ inputValue }) {
  const [countries, setCountries] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error("Nie można znaleźć danych w API");
        } else {
          const data = await response.json();
          setCountries(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Coś poszło nie tak!", error);
      }
    };
    setIsLoading(true);
    fetchData();
  }, []);

  const findByName = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <section className="countries">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        findByName.map((country) => (
          <section key={country.name.official} className="country__container">
            <Link to={`/specificCountry/${country.name.common}`}>
              <div className="country__flag">
                <img
                  src={country.flags.svg}
                  alt={`Flaga: ${country.name.common}`}
                />
              </div>
              <div className="country__informations">
                <h3 className="country__name">{country.name.common}</h3>
                <p className="country__information">
                  <span>{`Population: `}</span>
                  {country.population
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </p>
                <p className="country__information">
                  <span>{`Region: `}</span>
                  {country.region}
                </p>
                <p className="country__information">
                  <span>{`Capital: `}</span>
                  {country.capital}
                </p>
              </div>
            </Link>
          </section>
        ))
      )}
    </section>
  );
}
