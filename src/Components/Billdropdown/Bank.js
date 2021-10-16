import React, { useState } from "react";
import Bill from "../Bill";

const New = () => {
  const userData = [
    { id: "1", name: "kabadi", userName: "ajith" },
    { id: "2", name: "volley ball", userName: "ajith lal" },
    { id: "3", name: "foot ball", userName: "ronaldo" }
  ];

  const [users, setusers] = useState(userData);
  const [name, setname] = useState("");
  const [userName, setusersName] = useState("");
  const [index, setIndex] = useState(0);

  const handleInputChange = event => {
    const { name, value } = event.target;
  // console.log(event)
    if (name === "name") {
        setname(value);
        console.log(value);
    } else setusersName(value);
    console.log(value);
  };

  const addUser = (name, userName) => {
    let user = {};
    const math = Math.max(...users.map(r => r.id),0);
    user.id = math + 1;
    user.name = name;
    user.userName = userName;
    setusers([...users, user]);
  };

  const deletebutton = index => {
    const newList = [...users];
    newList.splice(index, 1);
    setusers(newList);
  };

  const editbutton = user => {
    setname(user.name);
    setusersName(user.userName);
    setIndex(user.id);

  };
  const update = () => {
    let a = [...users]
    a.forEach(user => {
      if(user.id===index){
             user.name = name;
             user.userName = userName;
      }
    });
    setusers(a);

}

  
  return (
    <div>
     <Bill />
      <h1>The CRUD Operator with hooks</h1>

      <h2>Add User</h2>

      <label>Name</label>
      <input
        type="radio"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <label>userName</label>
      <input
        type="radio"
        name="userName"
        value={userName}
        onChange={handleInputChange}
      />
      <button onClick={() => addUser(name, userName)}>Add New User</button>
      <button onClick={() => update()}>Update</button>
      <h2>View User</h2>

      <tabel className="table">
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>userName</th>
          <th>Action</th>
        </tr>
        <tbody>
          {users.length > 0 &&
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <button onClick={() => deletebutton(index)}> Delete </button>
                <button onClick={() => editbutton(user,index)}>Edit</button>
              </tr>
            ))}
        </tbody>
      </tabel>
    </div>
  );
};

export default New;
