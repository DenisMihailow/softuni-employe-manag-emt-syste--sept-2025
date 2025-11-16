import { useEffect, useState } from "react";
import UserItem from "./UserItem";

export default function UserList(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
        fetch('http:/localhost:3030/jsonstore/users')
        .then(result =>{
          setUsers(Object.values(result));
          
        })
        .catch((err)=> alert(err.message));
  },[]);
    return(
        <div className="table-wrapper">
        <table className="table">
          <thead>
            
          </thead>
          <tbody>
            <UserItem />
          </tbody>
        </table>
        <button className="btn-add btn">Add new user</button>
      </div>
    );
}