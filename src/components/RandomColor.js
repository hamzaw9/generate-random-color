import { useEffect, useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000');

  useEffect(() => {
    handleCreateRandomColor();
  }, [typeOfColor]);

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomColor = () => {
    if (typeOfColor == 'hex') {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let hexColor = '#';

      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }
      setColor(hexColor);
    } else {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);
      setColor(`rgb(${r},${g},${b})`);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: color }}>
      <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
export default RandomColor;
