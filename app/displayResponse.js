
'use client';

import { useState } from 'react';

export default function DisplayResponse() {
  const [response, setResponse] = useState('');
  const [inputData, setInputData] = useState(''); 


  const fetchData = async () => {
    try {
      const res = await fetch('/api/sort', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      // Convert the sorted array back to a string and display it
      setResponse(data.word.join(''));
    } catch (error) {
      setResponse('Error fetching data');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>String Sorter</h1>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter a string"

        style={{
            color: 'black', // Set the font color to black
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '10px',
          }}
      />
      <button onClick={fetchData}
             style={{
                padding: '10px 20px',
                margin:'0px 10px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}
      >Sort String</button>
      <p>Sorted Response: {response}</p>
    </div>
  );
}
