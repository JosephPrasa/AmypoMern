import React, { useEffect, useState } from "react";
import axios from "axios";


const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Post() {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setPosts(res.data);
    });
  }, []);

  const addPost = () =>{
    if(!title || !body){
        alert("Feild should not be empty");
        return;
    }

    axios.post(API_URL,{
        title,
        body,
        userId:1
    })
    .then(res=>{
        setPosts([...posts,res.data]);
        setTitle("");
        setBody("");
        alert("Post Added Successfully!!!!!!!");
    });
  };


  return (
    <div>
      <h3>Post List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                className="form-control"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                className="form-control"
                placeholder="Enter Body"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </td>
            <td>
              <button className='btn btn-primary' onClick={addPost}>Add</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Post;
