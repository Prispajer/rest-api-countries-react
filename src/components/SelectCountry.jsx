import React from "react";

export default function SelectedCountry() {
  const [specificCountry, setSpecificCountry] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const specificData = await fetch(
          "https://restcountries.com/v3.1/name/Poland?fullText=true"
        );
        if (!specificData.ok) {
          throw new Error("Wystąpił błąd podczas pobierania danych z API");
        } else {
          const data = await specificData.json();
          setSpecificCountry(data);
        }
      } catch (error) {
        console.log("Coś poszło nie tak!", error);
      }
    };

    fetchData();
  }, []);

  if (!specificCountry.length) {
    console.log("Nic nie znaleziono");
  }

  const borders = specificCountry.map(
    (specificCountry) => specificCountry.borders
  );

  const borderButtons = [];
  borders.forEach((countryBorders, index) => {
    countryBorders.forEach((border, innerIndex) => {
      borderButtons.push(
        <button key={`${index}-${innerIndex}`}>{border}</button>
      );
    });
  });

  const mappedElements = specificCountry.map((specificCountry) => {
    return (
      <main key={specificCountry.name.official}>
        <section className="specificCountry__button">
          <button>Back</button>
        </section>
        <section className="specificCountry__container">
          <div className="specificCountry__image">
            <img
              src={specificCountry.flags.svg}
              alt={`Flaga: ${specificCountry.name.common}`}
            />
          </div>
          <div className="specificCountry__informations">
            <h2>{specificCountry.name.common}</h2>
            <div className="specificCountry__information">
              <p>{specificCountry.name.official}</p>
              <p>{specificCountry.population}</p>
              <p>{specificCountry.region}</p>
              <p>{specificCountry.subregion}</p>
              <p>{specificCountry.capital}</p>
              <p>{specificCountry.tld}</p>
            </div>
          </div>
          <div className="specificCountry__border-countries">
            <p>Border Countries:</p>
            {borderButtons}
          </div>
        </section>
      </main>
    );
  });

  return <div>{mappedElements}</div>;
}
