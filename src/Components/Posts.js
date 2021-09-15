import axios from "axios";
import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";


function Posts()
{
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts,setposts] = useState([]);
    const [users,setUsers] = useState([]);
    const[userId,setuserId] = useState("");
    const[title,setTitle] = useState("");
    const[body,setBody] =useState("");
    const[id,setId] = useState("");
    
     
  let getposts= async()=>{
        try{
            const {data} = await axios.get(url);
            const {data:users} = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(users);
            console.log(data);
            setposts(data);
            setUsers(users);
        }
        catch(err)
        {
            console.log("GET"+err);
        }
    }
     
    let createPosts = async()=>{
       try{
        const {data:post} = await axios.post(url,{
            userId:userId,
            title:title,
            body:body,
          });
          let temposts = [...posts];
          console.log(post);
          temposts.push(post);
          setposts(temposts);
          setuserId("");
          setBody("");
          setTitle("");
       }
       catch(err)
       {
           console.log("create"+err);
       }
       
    }
    useEffect(()=>{
         console.log("component mounted");
         getposts();
     
    },[]);
    
 
    let deletePost= async(id)=>{
        try{
            const {data} = await axios.delete(`${url}/${id}`);
            console.log(data);
            let temposts = [...posts];
            temposts = temposts.filter((p)=>{return p.id!==id});
            setposts(temposts);
    
        }
        catch(err)
        {
            console.log("delete"+err);
        }
       
    }
    
    
      let updatePost = async()=>{
          const {data:put} = await axios.put(`${url}/${userId}`,{
              userId:userId,
              title:title,
              body:body,
          });
          let temposts = [...posts];
          let index = temposts.findIndex((p)=>p.id ===id);
          temposts[index] = put;
          setposts(temposts);
      }


    let updateform = async(post)=>{
       setTitle(post.title);
       setBody(post.body);
       setuserId(post.userId);
       setId(post.id);
    }


    let handlechange =({target:{name,value}})=>{
        if(name==="userId")
        {
            setuserId(value);
        }
        if(name==="title")
        {
             setTitle(value);
        }
        if(name==="body")
        {
            setBody(value);
        }

    }

     let handleSubmit=(event)=>{
       event.preventDefault();
       if(id==="")
       {
        createPosts();
       }
       else{
           updatePost();
       }
      
     }
    return(
        <>
        <div className="container">
        <p className="display-3 text-center font-weight-bold">All Posts
        <button type="button" className="btn btn-success ml-4" data-toggle="modal" data-target="#mymodal">Add Post</button>
        </p>
       

        <div className="modal fade bg-danger" id="mymodal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title ">
                            <h4 className="font-weight-bold">Create or Update Post</h4>
                            </div>
                        <button type="button" className="close" data-dismiss="modal"> &times; </button> 
                    </div>
                    <div className="modal-body">
                        
                        <form>
                       <div className="form-group">
                          <select className="form-control" name="userId" value={userId} onChange={handlechange}>
                        {
                          users.map((user)=>{
                            return <option key={user.id} value={user.id}>{user.name}</option>
                          })
                        }
                        </select>
                     </div>
                      <div className="form-group">
                     <label>Title:</label><br/>
                      <input className="form-control" type="text" name="title" value={title} onChange={handlechange}></input>
                      </div>
                       <div className="form-group">
                     <label>Body:</label><br/>
                      <textarea className="form-control" name="body" value={body} rows={5} cols={30} onChange={handlechange}>
                      </textarea>
                       </div>
                     <div>
                   <button className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Submit</button>
                   <button className="btn btn-danger ml-3" data-dismiss="modal">Close</button>
                  </div>
                </form>
           </div>
                </div>
            </div>
        </div>
         <div className="row">
          {posts.map((post)=>{
              return <div className="card col-md-5 mx-auto mx-md-9 my-4" style={{width:"400px"}}>
              <div className="card-body">
                  <div className="card-title">CardNo:{post.id}</div>
                  <h3>{post.title}</h3>
                  <h5>Body</h5>
                  <p>{post.body}</p>
              </div>
              <div className="card-footer row">
              <button className="btn btn-danger col-lg-3 my-2 mx-auto" onClick={()=>deletePost(post.id)}>Delete</button>
              <button className="btn btn-outline-info col-lg-3 my-2 mx-auto" data-toggle="modal" data-target="#mymodal" onClick={()=>updateform(post)}>Update</button>
              <Link to={`/posts/${post.userId}`} className="btn col-lg-3 my-2 btn-outline-dark mx-auto">Comments</Link>
        
              </div>
             </div>
          })
          }
         </div>
         </div>
        </>
    );
}
export default Posts;

