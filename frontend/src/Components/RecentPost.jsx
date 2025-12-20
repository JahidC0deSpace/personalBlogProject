import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { get,API_BASE_URL } from '../services/Endpoint';

const RecentPost = () => {
    const navigate = useNavigate();
    const  [post,setPost] = useState([]);
    console.log(post);
    
    const handleNavigate = () => {
        navigate('/post/069584065');
    }

    const getRecentPosts = async () => {
        try {
            const response = await get('/api/blog/getposts');
            const data = response.data;
            setPost(data.posts);
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getRecentPosts();
        
    }, []);
  return (
    <>
    <div className='container'>
        <div className="mb-5 text-center">
            <h2 className="fw-bold fs-1 text-white">Recent Posts</h2>   
        </div>
        <div className="row">
            {post && post.map((post,index) => {
                return (
            <div key={index} className="col-md-4 col-lg-4 col-xs-12 mb-4">
                 <div  className="card border-success" style={{ borderWidth: "2px", backgroundColor: "#2b2b2b", borderRadius: "10px", overflow: "hidden" }}>
                    <img  src={` ${API_BASE_URL}/images/${post.image} `}
                    className='card-img-top img-fluid' alt="" />
                    <div className="card-body bg-dark text-white">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.desc}</p>
                        <button onClick={handleNavigate} className="btn btn-primary w-100 mt-3" >Read Article</button>
                    </div>
                 </div>
            </div>
                )
            })}
            
        </div>
        
    </div>
    </>
  )
}

export default RecentPost
