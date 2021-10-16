// import React from "react";

// const DB = () =>{
//   return(
//     <div>
//       <h1>dash board</h1>
//     </div>
//   )
// }

// export default DB;



import React, { useState, useEffect } from 'react';

function DB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://hn.algolia.com/api/v1/search?query=react',
      );
      const json = await res.json();
      setData(json.hits);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data.map(item => (
        <li key={item.ObjectId}>
          <a >{item.author}</a>
        </li>
      ))}
    </ul>
  );
}

export default DB;