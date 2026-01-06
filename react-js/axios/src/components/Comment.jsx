import axios from "axios";
import React, { useEffect, useState } from "react";

function Comment() {
  const API_URL = "https://jsonplaceholder.typicode.com/comments";

  const [comment, setComment] = useState([]);

  const [name,setName]  = useState("");
  const [email,setEmail]  = useState("");
  const [body,setBody]  = useState("");

  useEffect(() => {
    axios.get(API_URL).then((r) => {
      setComment(r.data);
    });
  }, []);

  const addPost = ()=>{
    if(!name || !body){
        alert("Not be empty Gopal !!!");
        return;
    }
    axios.post(API_URL,{
        name,
        email,
        body,
        postId:1
  })
  .then(res=>{
    setComment([...comment,res.data]);
    setName("");
    setEmail("");
    setBody("");
    alert("Added Successfully!!!!!!!!!");
  });
  };

  return (
    <div>
      <h3>Comment Page</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {comment.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.body}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td><input className="form-control" placeholder="Entere Titliko" value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                <td><input className="form-control" placeholder="Entere Emailo" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></td>
                <td><input className="form-control" placeholder="Enter Body" value={body} onChange={(e)=>{setBody(e.target.value)}}/></td>
                <td><button className="btn btn-primary" onClick={addPost}>Add</button></td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Comment;



// edit and delete button
// function enable
// conditional rendering
