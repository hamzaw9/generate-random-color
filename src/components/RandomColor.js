import { useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000');

  return (
    <div style={{ width: '100vw', height: '100vh', background: color }}>
      <button>Create Hex Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
};
export default RandomColor;
