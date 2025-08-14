import React, { useState, useEffect } from 'react';
function Home(){
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
        <table border={1} cellPadding={10} cellSpacing={0}>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
          {data.map((user) => (
            <tr>
                <td key={user.id}>{user.id}</td>
                <td key={user.id}>{user.name}</td>
                <td key={user.id}>{user.username}</td>
                <td key={user.id}>{user.email}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
    );

}

export default Home;