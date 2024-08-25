import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Nav'
import Add from './Add'
import Home from './Home'
import Result from './Result'

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/getbyid" element ={<Result/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
