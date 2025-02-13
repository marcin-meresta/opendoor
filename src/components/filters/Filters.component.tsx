import './Filters.component.css';
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
  const [filtered, setFiltered] = useState<Listing[]>([]);

  const onOrderChanged = (nextOrder: SortingOrderDirection) => setOrder(nextOrder);
  const onActiveStateChanged = (nextActiveState: ActiveInactiveFilterState) => setActiveState(nextActiveState);
  const onAddressChanged = (nextAddress: string) => setAddress(nextAddress);

  useEffect(() => {
    setFiltered(
      listings.filter((currentListing: Listing) => {
        if (activeState !== ActiveInactiveFilterState.all) {
          if (activeState === ActiveInactiveFilterState.active && currentListing.zillowData?.dateSold) {
            return false;
          }
          if (activeState === ActiveInactiveFilterState.sold && !currentListing.zillowData?.dateSold) {
            return false;
          }
        }
        if (address) {
          if (!currentListing.address.formattedAddress.toLowerCase().includes(address.toLowerCase())) {
            return false;
          }
        }
        return true;
      }),
    );
  }, [address, activeState, listings, order]);

  useEffect(() => {
    onChange(order === SortingOrderDirection.newest ? filtered : filtered.reverse());
  }, [filtered, order, onChange]);

  return (
    <>
      <div className="app-filters-container">
        <div className="app-filters-header">
          <h1>Homes for sale in Tampa</h1>
          <div className="app-filters-header-description">
            {listings.length ? `${listings.length} listings found — Listed on the MLS. Provided by Opendoor Brokerage.` : 'No listings found'}
          </div>
        </div>
        <div className="app-filters-body">
          <OrderFilterComponent initialOrder={order} onChange={onOrderChanged} />
          <ActiveInactiveFilterComponent initialState={activeState} onChange={onActiveStateChanged} />
          <PropertyAddressFilterComponent onChange={onAddressChanged} />
        </div>
      </div>
    </>
  );
};

export default FiltersComponent;
