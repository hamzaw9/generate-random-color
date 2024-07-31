import { useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000');

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: color }}>
      <button>Create Hex Color</button>
      <button>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
    </div>
  );
};
export default RandomColor;
