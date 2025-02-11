import { useEffect, useState } from 'react';

interface PropertyAddressFilterComponentParams {
  onChange: (newAddress: string) => void;
}

const PropertyAddressFilterComponent = ({ onChange }: PropertyAddressFilterComponentParams) => {
  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [address, setAddress] = useState('');
  useEffect(() => {
    onChange(address);
  }, [address, onChange]);

  const onAddressChanged = (address: string) => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        setAddress(address);
      }, 500),
    );
  };

  return (
    <>
      <div>
        <input placeholder="Search for address..." onChange={(e) => onAddressChanged(e.target.value)} />
      </div>
    </>
  );
};
export default PropertyAddressFilterComponent;
