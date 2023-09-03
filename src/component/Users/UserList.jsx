import React from 'react'

import classes from './UserList.module.css';
import Card from '../UI/Card';
import UserItem from './UserItem';

const UserList = (props) => {

    // const expense=(props.items.map(item=>{
    //     <h1>hello</h1>
    // }));
    console.log(props.items);
  return (
    <Card className={classes.users}>
     <ul>
      {props.items.map((item)=>{
        return(<UserItem key={item.id} item={item} />)
      })}
     </ul>
     </Card>
   
   
  )
}

export default UserList