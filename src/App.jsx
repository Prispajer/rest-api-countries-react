import Navbar from "./components/Navbar";
import Options from "./components/Options";
import "./styles/main.scss";
import { faSearch as regularSearch } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div>
      <Navbar />
      <Options />
    </div>
  );
}

export default App;
