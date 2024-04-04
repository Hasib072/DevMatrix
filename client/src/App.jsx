import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import CreateElement from './CreateElement'
import MyProfile from './MyProfile'
import Explore from './Explore'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/create' element={<CreateElement />}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/" element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
