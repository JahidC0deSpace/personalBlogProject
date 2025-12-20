import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import UserLayout from './Layout/UserLayout.jsx';
import AdminLayout from './Layout/AdminLayout.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AddPost from './pages/Admin/AddPost.jsx';
import AllPost from './pages/Admin/AllPost.jsx';
import Users from './pages/Admin/Users.jsx';

function App() {

  return (
    <>
      <Routes>
           <Route path='/' element={<UserLayout/>}>
              <Route index element={<Home/>} />
              <Route path="post/:id" element={<Post/>} />
              <Route path="profile/:id" element={<Profile/>} />
           </Route>
           <Route path='/dashboard' element={<AdminLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='addpost' element={<AddPost/>} />
              <Route path='users' element={<Users/>}/>
              <Route path='allpost' element={<AllPost/>} />
           </Route>
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
