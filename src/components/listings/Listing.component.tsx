import './Listing.component.css';
import { Listing } from './Listings.types';
import houseImage from './../../assets/house.jpg';

const ListingComponent = ({ listing }: { listing: Listing }) => {
  return (
    <>
      <div className="app-listing-container">
        <div className="app-listing-carousel">
          <img src={houseImage} alt="house" />
        </div>
        <div className="app-listing-description">
          <h1>${listing.userData.askingPrice ? listing.userData.askingPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') : '?'}</h1>
          <span>{listing.address.formattedAddress}</span>
        </div>
      </div>
    </>
  );
};
export default ListingComponent;
