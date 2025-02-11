import './App.css';
import { useEffect, useState } from 'react';
import MapComponent from './components/Map.component';
import NavbarComponent from './components/Navbar.component';
import { Listing } from './components/listings/Listings.types';
import ListingsComponent from './components/Listings.component';
import FiltersComponent from './components/filters/Filters.component';
import dataMock from './../get-listings.json';

function App() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);

  useEffect(() => {
    setListings(dataMock.deals);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div>
        <div>
          <MapComponent />
        </div>
        <div>
          <div>
            <FiltersComponent listings={listings} onChange={(filtered: Listing[]) => setFilteredListings(filtered)} />
          </div>
          <div>
            <ListingsComponent listings={filteredListings} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
