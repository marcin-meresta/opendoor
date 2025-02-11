import { Listing } from './Listings.types';

const ListingComponent = ({ listing }: { listing: Listing }) => {
  return (
    <>
      <div>{listing._id}</div>
    </>
  );
};
export default ListingComponent;
