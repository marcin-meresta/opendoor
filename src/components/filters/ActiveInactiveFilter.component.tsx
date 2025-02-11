import { useEffect, useState } from 'react';
import { ActiveInactiveFilterState } from './Filters.types';

interface ActiveInactiveFilterComponentParams {
  initialState: ActiveInactiveFilterState;
  onChange: (nextState: ActiveInactiveFilterState) => void;
}

const ActiveInactiveFilterComponent = ({ initialState, onChange }: ActiveInactiveFilterComponentParams) => {
  const [state, setState] = useState(initialState);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => onChange(state), [state, onChange]);

  return (
    <>
      <div onClick={() => setIsListVisible(!isListVisible)}>
        <span>{state}</span>
        <ul style={{ listStyle: 'none', visibility: isListVisible ? 'visible' : 'hidden' }}>
          <li>
            <a href="#" onClick={() => setState(ActiveInactiveFilterState.all)}>
              <span>{ActiveInactiveFilterState.all}</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setState(ActiveInactiveFilterState.active)}>
              <span>{ActiveInactiveFilterState.active}</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setState(ActiveInactiveFilterState.sold)}>
              <span>{ActiveInactiveFilterState.sold}</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ActiveInactiveFilterComponent;
