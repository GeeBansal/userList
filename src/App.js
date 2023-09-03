import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";

function App() {
  
  const [data, setData] = useState([]);

 const addHandler=(uName,uAge)=>{
  setData((prevDate)=>{
    return[...prevDate,{name:uName,age:uAge,id:Math.random().toString()},]
  })
 }
  return (
    <div>
    <AddUser onAdd={addHandler} />
    <UserList items={data} />
    </div>
  );
}

export default App;
