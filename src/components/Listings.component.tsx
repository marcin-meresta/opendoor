import './Listings.component.css';
import { useEffect, useState } from 'react';
import { Listing } from './listings/Listings.types';
import FiltersComponent from './filters/Filters.component';
import ListingComponent from './listings/Listing.component';

import dataMock from './../../get-listings.json';

const ListingsComponent = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);

  const wrapListings = (items: Listing[]) => items.map((item: Listing) => <ListingComponent listing={item} key={item._id} />);
  const getItems = () => {
    if (filteredListings.length < 3) {
      return wrapListings(filteredListings);
    }
    return wrapListings([filteredListings[0], filteredListings[1]]).concat(
      <p key={'__intersection__'}>Make your strongest offer when you buy with Opendoor</p>,
      wrapListings(filteredListings.slice(2)),
    );
  };

  useEffect(() => {
    setListings(dataMock.deals);
  }, []);

  return (
    <>
      <div className="app-listings-container">
        <FiltersComponent listings={listings} onChange={(filtered: Listing[]) => setFilteredListings(filtered)} />
        <ul>{getItems()}</ul>
      </div>
    </>
  );
};

export default ListingsComponent;
