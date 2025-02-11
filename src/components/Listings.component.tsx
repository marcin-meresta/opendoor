import { Listing } from './listings/Listings.types';
import ListingComponent from './listings/Listing.component';

interface ListingsComponentParams {
  listings: Listing[];
}

const ListingsComponent = ({ listings }: ListingsComponentParams) => {
  return (
    <>
      <div>
        <h1>Homes for sale in Tampa</h1>
        <div>522 listings found — Listed on the MLS. Provided by Opendoor Brokerage.</div>
      </div>
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <span>Make your strongest offer when you buy with Opendoor</span>
          </li>
          {listings.map((filteredListing: Listing) => (
            <ListingComponent listing={filteredListing} key={filteredListing._id} />
          ))}
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default ListingsComponent;
