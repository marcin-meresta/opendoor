import { useEffect, useState } from 'react';
import { Listing } from '../listings/Listings.types';
import OrderFilterComponent from './OrderFilter.component';
import ActiveInactiveFilterComponent from './ActiveInactiveFilter.component';
import PropertyAddressFilterComponent from './PropertyAddressFilter.component';
import { ActiveInactiveFilterState, SortingOrderDirection } from './Filters.types';

interface FiltersComponentParams {
  listings: Listing[];
  onChange: (filteredListings: Listing[]) => void;
}

const FiltersComponent = ({ listings, onChange }: FiltersComponentParams) => {
  const [order, setOrder] = useState(SortingOrderDirection.newest);
  const [activeState, setActiveState] = useState(ActiveInactiveFilterState.all);
  const [address, setAddress] = useState('');

  const onOrderChanged = (nextOrder: SortingOrderDirection) => setOrder(nextOrder);
  const onActiveStateChanged = (nextActiveState: ActiveInactiveFilterState) => setActiveState(nextActiveState);
  const onAddressChanged = (nextAddress: string) => setAddress(nextAddress);

  useEffect(() => {
    const filtered: Listing[] = listings.filter((currentListing: Listing) => {
      if (activeState !== ActiveInactiveFilterState.all) {
        if (currentListing.zillowData?.dateSold) {
          return false;
        }
      }
      if (address) {
        if (!currentListing.address.formattedAddress.includes(address)) {
          return false;
        }
      }
      return true;
    });
    console.log(filtered);
  }, [address, activeState, listings, order, onChange]);

  return (
    <>
      <div>
        <OrderFilterComponent initialOrder={order} onChange={onOrderChanged} />
        <ActiveInactiveFilterComponent initialState={activeState} onChange={onActiveStateChanged} />
        <PropertyAddressFilterComponent onChange={onAddressChanged} />
      </div>
    </>
  );
};

export default FiltersComponent;
