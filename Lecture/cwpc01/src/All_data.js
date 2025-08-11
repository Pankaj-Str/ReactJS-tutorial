import React, { useState, useEffect } from 'react';

function All_data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetching Data Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.length > 0 && (
        <table border={1} cellPadding={10} cellSpacing={10}>
          {data.map((user) => (
            <>
            <tr>
                <td key={user.id}>{user.name}</td>
                <td key={user.id}>{user.email}</td>
            </tr>
            </>
          ))}
        </table>
      )}
    </div>
  );
}

export default All_data;