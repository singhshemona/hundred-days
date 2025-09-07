import { useState } from 'react';
import { Map } from './components/Map';

export const App = () => {
  const [comfortZone, setComfortZone] = useState(false);

  const handleCheckboxChange = () => {
    setComfortZone(!comfortZone);
  };

  return (
    <>
      <div className="header">
        <input
          type="checkbox"
          checked={comfortZone}
          onChange={handleCheckboxChange}
        />
        <h1>{comfortZone ? 'Entering' : 'Leaving'} my comfort zone</h1>
      </div>

      <Map />
    </>
  );
};
