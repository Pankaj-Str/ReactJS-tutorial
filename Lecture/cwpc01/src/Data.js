import React, { useState, useEffect } from 'react';

function Data(){

    const [data, setData] = useState(null);
 
    // useEffect is used to fetch data when the component mounts
  useEffect(() => {
    // This is a simplified example of a data fetching operation using the fetch API
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []); // The empty array as the second argument means this effect runs only once when the component mounts

   return (
    <div>
        <div className='container'>
            {data ? (
            <div className='row justify-content-center'>
                <div className='col-sm-6'>
                    <div className='card shadow-lg border m-2'>
                        <div className='card-body'>
                            <h2 className='card-title'>{data.title}</h2>
                            <p className='card-text'>{data.body}</p>
                        </div>
                    </div>
                </div>
            </div>
            ) : ( 
               <div className='row justify-content-center'>
                    <div className='col-sm-3'>
                         <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
     
    </div>
  );
}


export default Data;