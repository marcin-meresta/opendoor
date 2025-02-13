import './App.css';
import MapComponent from './components/Map.component';
import NavbarComponent from './components/Navbar.component';
import ListingsComponent from './components/Listings.component';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="app-main-container">
        <div className="app-main-map">
          <MapComponent />
        </div>
        <div className="app-main-listings">
          <ListingsComponent />
        </div>
      </div>
    </>
  );
}

export default App;
