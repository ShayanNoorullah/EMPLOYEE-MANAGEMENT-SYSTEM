import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function EmployeeInfo() {
  let {id} = useParams();
  const [postObject, setPostObject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/Employee/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });

  return (
    <div className="EmployeeInfoPage">
      <div classname="left" id="left">
        <div className = "Employee" id="individual"> 
          <div className="name">{postObject.name}</div>
          <div className="address">{postObject.address}</div>
          <div className="phone">{postObject.phone}</div>
        </div>
      </div>
      <div classname="right" id="right">Comment Section</div>
    </div>
  );
}

export default EmployeeInfo