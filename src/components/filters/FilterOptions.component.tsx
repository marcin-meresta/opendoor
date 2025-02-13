import './FilterOptions.component.css';

interface FilterOptionsComponentParams<T = string> {
  items: T[];
  onChange: (clicked: T) => void;
}

const FilterOptionsComponent = ({ items, onChange }: FilterOptionsComponentParams) => {
  return (
    <>
      <ul className="app-filter-options-container">
        {items.map((item: string) => (
          <li key={item}>
            <a href="#" onClick={() => onChange(item)} className="app-filter-options-item">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterOptionsComponent;
