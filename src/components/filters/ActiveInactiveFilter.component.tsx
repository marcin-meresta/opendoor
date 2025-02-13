import { useEffect, useState } from 'react';
import './ActiveInactiveFilter.component.css';
import { ActiveInactiveFilterState } from './Filters.types';
import FilterOptionsComponent from './FilterOptions.component';

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
      <div onClick={() => setIsListVisible(!isListVisible)} className="app-filters-active-container">
        <span>{state}</span>
        {isListVisible ? (
          <FilterOptionsComponent
            items={[ActiveInactiveFilterState.all, ActiveInactiveFilterState.active, ActiveInactiveFilterState.sold]}
            onChange={(clickedDirection: string) => setState(clickedDirection as ActiveInactiveFilterState)}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ActiveInactiveFilterComponent;
