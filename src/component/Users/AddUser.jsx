import React, { useState } from "react";

import Card from "../UI/Card";
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorOverlay from "../UI/ErrorOverlay";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError]=useState();

  const onAgeChange = (e) => {
    setAge(e.target.value);
  };
  const onUsernameChange = (e) => {
    setUserName(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0 === 0) {
      setError({
        title:'Invalid Input',
        message:'Please enter both fields',
      })
      
      return;
    }
    if (+age < 1) {
      setError({
        title:'Invalid Input',
        message:'Please enter correct age (>0)',
      })
  
      return;
    }
    props.onAdd(userName,age);
    setUserName('');
    setAge('');
  };

    const onCancel=()=>{
      setError(null);
    }
  return (
    <div>
      {error && <ErrorOverlay title={error.title} message={error.message} onConfirm={onCancel} />}
    <Card className={styles.input}>
    <form action="" onSubmit={submitHandler}>
     <div className={styles.input}>

          <label htmlFor="">Username</label>
          <input type="text" value={userName} onChange={onUsernameChange} />

          <label htmlFor="">age(years)</label>
          <input type="text" value={age} onChange={onAgeChange} />

        <Button type="submit">Add User</Button>
      </div>
    </form>
    </Card>
    </div>
  );
};

export default AddUser;
