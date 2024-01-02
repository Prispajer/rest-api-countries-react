import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft as arrowLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useParams, Link } from "react-router-dom";

export default function SelectedCountry() {
  const [specificCountry, setSpecificCountry] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
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

  if (!specificCountry) {
    console.log("Nie znaleziono podanego kraju");
  }

  const borders = specificCountry.map(
    (specificCountry) => specificCountry.borders
  );

  const borderButtons = [];
  borders.forEach((countryBorders) => {
    if (countryBorders && countryBorders.length > 0) {
      countryBorders.forEach((border) => {
        borderButtons.push(<button key={uuidv4()}>{border}</button>);
      });
    } else {
      borderButtons.push(
        <span key={uuidv4()}>This country has no neighbours!</span>
      );
    }
  });

  return (
    <section className="specificCountry">
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
            <section className="specificCountry__container">
              <img
                src={specificCountry.flags.svg}
                alt={`Flaga: ${specificCountry.name.common}`}
              />
              <div className="specificCountry__informations-container">
                <h2>{specificCountry.name.common}</h2>
                <div className="specificCountry__informations">
                  <div className="specificCountry__information">
                    <p>
                      <span>{"Official Name: "}</span>
                      {specificCountry.name.official}
                    </p>
                    <p>
                      <span>{"Population: "}</span>
                      {specificCountry.population}
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
                  <div className="specificCountry__information">
                    <p>
                      <span>{"Top Level Domain: "}</span>
                      {specificCountry.tld}
                    </p>
                    <p>
                      <span>{"Currencies: "}</span>
                    </p>
                    <p>
                      <span>{"Languages: "}</span>
                    </p>
                  </div>
                </div>
                <div className="specificCountry__border-countries">
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
