import { useEffect, useState } from 'react';
import { SortingOrderDirection } from './Filters.types';

interface OrderFilterComponentParams {
  initialOrder: SortingOrderDirection;
  onChange: (nextDirection: SortingOrderDirection) => void;
}

const OrderFilterComponent = ({ initialOrder, onChange }: OrderFilterComponentParams) => {
  const [direction, setDirection] = useState(initialOrder);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => onChange(direction), [direction, onChange]);

  return (
    <>
      <div onClick={() => setIsListVisible(!isListVisible)}>
        <span>{direction}</span>
        <ul style={{ listStyle: 'none', visibility: isListVisible ? 'visible' : 'hidden' }}>
          <li>
            <a href="#" onClick={() => setDirection(SortingOrderDirection.newest)}>
              {SortingOrderDirection.newest}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setDirection(SortingOrderDirection.oldest)}>
              {SortingOrderDirection.oldest}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OrderFilterComponent;
