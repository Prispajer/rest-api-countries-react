import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft as arrowLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useParams, Link } from "react-router-dom";

export default function SelectedCountry({
  countries,
  specificCountry,
  setSpecificCountry,
  isLoading,
  setIsLoading,
  switchTheme,
}) {
  const { countryName } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const specificData = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        if (!specificData.ok) {
          throw new Error("Nie można znaleźć danych w API");
        } else {
          const data = await specificData.json();
          setSpecificCountry(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Coś poszło nie tak!", error);
      }
    };
    setIsLoading(true);
    fetchData();
  }, [countryName]);

  const findByProperty = specificCountry.find(
    (searchName) => searchName.name.common === countryName
  );

  if (!specificCountry || !findByProperty) {
    return <p style={{ margin: "50px 80px" }}>Loading...</p>;
  }

  const currenciesArray = Object.keys(findByProperty.currencies);

  const languagesArray = Object.keys(findByProperty.languages);

  const mappedCurrencies = currenciesArray.map(
    (key) => findByProperty.currencies[key].name
  );

  const mappedLanguages = languagesArray.map(
    (key) => findByProperty.languages[key]
  );

  const borders = specificCountry.map(
    (specificCountry) => specificCountry.borders
  );

  const borderButtons = borders.map((countryBorders) => {
    if (countryBorders && countryBorders.length > 0) {
      return countryBorders.map((border) => {
        const findNeighbour = countries.find(
          (country) => country.cca3 === border
        );

        return (
          <Link
            key={uuidv4()}
            to={`/specificCountry/${findNeighbour.name.common}`}
          >
            <button key={uuidv4()}>
              {findNeighbour ? findNeighbour.name.common : border}
            </button>
          </Link>
        );
      });
    } else {
      return <span key={uuidv4()}>This country has no neighbours!</span>;
    }
  });

  return (
    <section
      className={switchTheme ? "specific-country" : "specific-country__dark"}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        specificCountry.map((specificCountry) => (
          <section key={specificCountry.name.official}>
            <Link to="/">
              <button>
                <FontAwesomeIcon icon={arrowLeft} />
                <span>Back</span>
              </button>
            </Link>
            <section
              className={
                switchTheme
                  ? "specific-country__container"
                  : "specific-country__container__dark"
              }
            >
              <div className="specific-country__image-container">
                <img
                  src={specificCountry.flags.svg}
                  alt={`Flaga: ${specificCountry.name.common}`}
                />
              </div>
              <div
                className={
                  switchTheme
                    ? "specific-country__informations-container"
                    : "specific-country__informations-container__dark"
                }
              >
                <h2>{specificCountry.name.common}</h2>
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
                      <span>{"Official Name: "}</span>
                      {specificCountry.name.official}
                    </p>
                    <p>
                      <span>{"Population: "}</span>
                      {specificCountry.population
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </p>
                    <p>
                      <span>{"Region: "}</span>
                      {specificCountry.region}
                    </p>
                    <p>
                      <span>{"Sub Regions: "}</span>
                      {specificCountry.subregion}
                    </p>
                    <p>
                      <span>{"Capital: "}</span>
                      {specificCountry.capital}
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
                      <span>{"Top Level Domain: "}</span>
                      {specificCountry.tld}
                    </p>
                    <p>
                      <span>{"Currencies: "}</span>
                      {mappedCurrencies.join(", ")}
                    </p>
                    <p>
                      <span>{"Languages: "}</span>
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
          </section>
        ))
      )}
    </section>
  );
}
