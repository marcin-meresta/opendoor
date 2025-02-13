import './OrderFilter.component.css';
import { useEffect, useState } from 'react';
import { SortingOrderDirection } from './Filters.types';
import FilterOptionsComponent from './FilterOptions.component';

interface OrderFilterComponentParams {
  initialOrder: SortingOrderDirection;
  onChange: (nextDirection: SortingOrderDirection) => void;
}

const OrderFilterComponent = ({ initialOrder, onChange }: OrderFilterComponentParams) => {
  const [direction, setDirection] = useState<SortingOrderDirection>(initialOrder);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => onChange(direction), [direction, onChange]);

  return (
    <>
      <div className="app-filters-order-container" onClick={() => setIsListVisible(!isListVisible)}>
        <span>{direction}</span>
        {isListVisible ? (
          <FilterOptionsComponent
            items={[SortingOrderDirection.newest, SortingOrderDirection.oldest]}
            onChange={(clickedDirection: string) => setDirection(clickedDirection as SortingOrderDirection)}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default OrderFilterComponent;
