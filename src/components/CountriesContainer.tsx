import React, { use } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import { fetchData } from "../utils/data";
import { filterByName } from "../utils/data";

export default React.memo(function CountriesContainer() {
  const {
    countries,
    filteredCountries,
    setCountries,
    inputValue,
    isLoading,
    setIsLoading,
    switchTheme,
  } = React.useContext(Context);

  React.useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const countries = await fetchData("https://restcountries.com/v3.1/all");
        setCountries(countries);
      } catch (error) {
        console.error("There was a problem while fetching a data!", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [setCountries, setIsLoading]);

  return (
    <section className={switchTheme ? "countries" : "countries__dark"}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filterByName(
          filteredCountries.length > 0 ? filteredCountries : countries,
          inputValue
        ).map((country) => (
          <section
            key={country?.name.official}
            className={
              switchTheme ? "country__container" : "country__container__dark"
            }
          >
            <Link to={`/country/${country?.name.common}`}>
              <div className="country__flag">
                <img
                  src={country?.flags.svg}
                  alt={`Flaga: ${country?.name.common}`}
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
                  {country?.name.common}
                </h3>
                <p
                  className={
                    switchTheme
                      ? "country__information"
                      : "country__information__dark"
                  }
                >
                  <span>{`Population: `}</span>
                  {country?.population
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
                  {country?.region}
                </p>
                <p
                  className={
                    switchTheme
                      ? "country__information"
                      : "country__information__dark"
                  }
                >
                  <span>{`Capital: `}</span>
                  {country?.capital}
                </p>
              </div>
            </Link>
          </section>
        ))
      )}
    </section>
  );
});
