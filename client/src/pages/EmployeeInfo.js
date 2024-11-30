import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function EmployeeInfo() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/Employee/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);//Dependency array

  const addComment = () => {
    axios.post("http://localhost:3001/comments", {
      commentbody: newComment , 
      EmployeeId: id, 
    },
    {
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    }
  )
    .then((response) => {
      if(response.data.error){
        alert(response.data.error);
      } else{
      const commentToAdd = {commentbody: newComment};
      setComments([...comments, commentToAdd]);
      setNewComment("");
      }
    });
  };

  return (
    <div className="EmployeeInfoPage">
      <div className="left">
        <div className = "Employee" id="individual"> 
          <div className="name">{postObject.name}</div>
          <div className="address">{postObject.address}</div>
          <div className="phone">{postObject.phone}</div>
        </div>
      </div>
      <div className="right">
        <div className="addCommentContainer">
          <input type="text" placeholder="Comment..." autoComplete="off" value={newComment} onChange={(event) => {setNewComment(event.target.value)}}/>
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return <div key={key} className="comment"> {comment.commentbody} </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfo