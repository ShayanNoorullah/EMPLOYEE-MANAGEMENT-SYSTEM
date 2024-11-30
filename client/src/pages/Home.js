import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [listOfEmployee, setListOfEmployee] = useState([]);
    let navigate = useNavigate();
  useEffect( () => {
    axios.get("http://localhost:3001/Employee").then((response) => {
        setListOfEmployee(response.data);
    });
  }, []);

  return (
    <div>
      {listOfEmployee.map((value,key) => {
      return (
      <div
        key={key}
        className="Employee" 
        onClick={() => {
          navigate(`/EmployeeInfo/${value.id}`);
          }}
      > 
        <div className = "name">{value.name} </div> 
        <div className = "address">{value.address}</div>
        <div className = "phone">{value.phone}</div>
        </div>
      );
    })}
    </div>
  )
}

export default Home
