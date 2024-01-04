import React from "react";
import { Link } from "react-router-dom";

export default function ShowAllCountries({
  debouncedValue,
  switchTheme,
  setFilteredRegions,
  setCountries,
  isLoading,
  setIsLoading,
  filteredRegions,
}) {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error("Nie można znaleźć danych w API");
        } else {
          const data = await response.json();
          setCountries(data);
          console.log(data);
          setFilteredRegions(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Coś poszło nie tak!", error);
      }
    };
    setIsLoading(true);
    fetchData();
  }, []);

  const findByName = filteredRegions.filter((country) =>
    country.name.common.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <section className={switchTheme ? "countries" : "countries__dark"}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        findByName.map((country) => (
          <section
            key={country.name.official}
            className={
              switchTheme ? "country__container" : "country__container__dark"
            }
          >
            <Link to={`/specificCountry/${country.name.common}`}>
              <div className="country__flag">
                <img
                  src={country.flags.svg}
                  alt={`Flaga: ${country.name.common}`}
                />
              </div>
              <div
                className={
                  switchTheme
                    ? "country__informations"
                    : "country__informations__dark"
                }
              >
                <h3
                  className={
                    switchTheme ? "country__name" : "country__name__dark"
                  }
                >
                  {country.name.common}
                </h3>
                <p
                  className={
                    switchTheme
                      ? "country__information"
                      : "country__information__dark"
                  }
                >
                  <span>{`Population: `}</span>
                  {country.population
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </p>
                <p
                  className={
                    switchTheme
                      ? "country__information"
                      : "country__information__dark"
                  }
                >
                  <span>{`Region: `}</span>
                  {country.region}
                </p>
                <p
                  className={
                    switchTheme
                      ? "country__information"
                      : "country__information__dark"
                  }
                >
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
