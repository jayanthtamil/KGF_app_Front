import React, { useState, useEffect } from "react";
import axios from "axios";
const API = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const getProductData = async () => {
    // try {
      const data = await axios.get("https://api.github.com/users");
      console.log(data.data);
      setProduct(data.data);
    // } catch (e) {
    //   console.log(e);
    // }

    // const json = await data.json()
    // return json.result
  };
  useEffect(() => {
    
    getProductData();
  }, []);
  return (
    <div>
      <h1>API reference</h1>

      <input
        type="text"
        placeholder="search here"
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
      {product
        .filter(user => {
          if (search == "") {
            return user;
          } else if (user.login.toLowerCase().includes(search.toLowerCase())) {
            return user;
          } else if (
            user.node_id.toLowerCase().includes(search.toLowerCase())
          ) {
            return user;
          }
        })
        .map(user => {
          return (
            <div>
              {user.login}_{user.id} <br />
              <img style={{ width: 200, height: 200 }} src={user.avatar_url} />
            </div>
          );
        })}
    </div>
  );
};
export default API;
