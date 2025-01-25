import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft as arrowLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../context/ContextProvider";
import { fetchData } from "../utils/data";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function CountryContainer() {
  const { countryName } = useParams<{ countryName: string }>();
  const {
    country,
    setCountry,
    isLoading,
    setIsLoading,
    switchTheme,
    countries,
  } = React.useContext(Context);

  React.useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const country = await fetchData(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        setCountry(country);
      } catch (error) {
        console.error("There was a problem while fetching data!", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [countryName, setCountry, setIsLoading]);

  const findByProperty = country?.find(
    (searchName) => searchName?.name.common === countryName
  );

  if (!country || !findByProperty) {
    return <p style={{ margin: "50px 80px" }}>Loading...</p>;
  }

  const currenciesArray = Object.keys(findByProperty.currencies || {});
  const languagesArray = Object.keys(findByProperty.languages || {});

  const mappedCurrencies = currenciesArray.map(
    (key) => findByProperty.currencies![key].name
  );

  const mappedLanguages = languagesArray.map(
    (key) => findByProperty.languages![key]
  );

  const borders = findByProperty.borders || [];

  const borderButtons = borders.length
    ? borders.map((border) => {
        const findNeighbour = countries.find(
          (country) => country?.cca3 === border
        );

        return (
          <Link key={uuidv4()} to={`/country/${findNeighbour?.name.common}`}>
            <button key={uuidv4()}>
              {findNeighbour ? findNeighbour.name.common : border}
            </button>
          </Link>
        );
      })
    : [<span key={uuidv4()}>This country has no neighbours!</span>];

  return (
    <section
      className={switchTheme ? "specific-country" : "specific-country__dark"}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        country.map((country) => (
          <React.Fragment key={country?.name.official}>
            <Link to="/">
              <button
                className={
                  switchTheme
                    ? "specific-country__back"
                    : "specific-country__back__dark"
                }
              >
                <FontAwesomeIcon icon={arrowLeft as IconProp} />
                <span>Back</span>
              </button>
            </Link>
            <section
              key={country?.name.official}
              className={
                switchTheme
                  ? "specific-country__container"
                  : "specific-country__container__dark"
              }
            >
              <div className="specific-country__image-container">
                <img
                  src={country?.flags.svg}
                  alt={`Flag: ${country?.name.common}`}
                />
              </div>
              <div
                className={
                  switchTheme
                    ? "specific-country__informations-container"
                    : "specific-country__informations-container__dark"
                }
              >
                <h2>{country?.name.common}</h2>
                <div
                  className={
                    switchTheme
                      ? "specific-country__informations"
                      : "specific-country__informations__dark"
                  }
                >
                  <div
                    className={
                      switchTheme
                        ? "specific-country__information"
                        : "specific-country__information__dark"
                    }
                  >
                    <p>
                      <span>Official Name: </span>
                      {country?.name.official}
                    </p>
                    <p>
                      <span>Population: </span>
                      {country?.population
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </p>
                    <p>
                      <span>Region: </span>
                      {country?.region}
                    </p>
                    <p>
                      <span>Sub Regions: </span>
                      {country?.subregion}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {country?.capital}
                    </p>
                  </div>
                  <div
                    className={
                      switchTheme
                        ? "specific-country__information"
                        : "specific-country__information__dark"
                    }
                  >
                    <p>
                      <span>Top Level Domain: </span>
                      {country?.tld.join(", ")}
                    </p>
                    <p>
                      <span>Currencies: </span>
                      {mappedCurrencies.join(", ")}
                    </p>
                    <p>
                      <span>Languages: </span>
                      {mappedLanguages.join(", ")}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    switchTheme
                      ? "specific-country__border-countries"
                      : "specific-country__border-countries__dark"
                  }
                >
                  <p>Border Countries:</p>
                  {borderButtons}
                </div>
              </div>
            </section>
          </React.Fragment>
        ))
      )}
    </section>
  );
}
