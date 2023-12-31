import React from "react";

export default function AllCountries() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error("Wystąpił błąd podczas pobierania danych z API");
        } else {
          const data = await response.json();
          setCountries(data);
          console.log(data);
        }
      } catch (error) {
        console.log("Coś poszło nie tak!", error);
      }
    };
    fetchData();
  }, []);

  const mappedElements = countries.map((country) => (
    <section key={country.name.official} className="country__container">
      <div className="country__flag">
        <img src={country.flags.svg} alt={`Flaga: ${country.name.common}`} />
      </div>
      <div className="country__informations">
        <h3 className="country__name">{country.name.common}</h3>
        <p className="country__information">
          <span>{`Population: `}</span>
          {country.population}
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
    </section>
  ));

  return <section className="countries">{mappedElements}</section>;
}
