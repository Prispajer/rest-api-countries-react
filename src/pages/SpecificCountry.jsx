import Navbar from "../components/Navbar";
import SelectCountry from "../components/SelectCountry";

export default function SpecificCountry({ toggleTheme, switchTheme }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} switchTheme={switchTheme} />
      <SelectCountry toggleTheme={toggleTheme} switchTheme={switchTheme} />
    </>
  );
}
