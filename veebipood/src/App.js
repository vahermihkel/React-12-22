import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisa-toode">
        <span>Toodet lisama</span>
      </Link>

{/* kommentaar: ctrl + ä VÕI "Edit -> Toggle line comment"
  localhost:3000    näidatakse Avaleht.js faili sisu
*/}
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>


    </div>
  );
}

export default App;
