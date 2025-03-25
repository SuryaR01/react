import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Nav from './nav&footer/nav'
import Home from './components/home'
import Collection from './components/collection'
import About from './components/about'
import Contact from './components/contact'
import Footer from './nav&footer/footer'

const App = () =>{
  return(
    <Router> 
    <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />

      </Routes>
      <Footer />
    </Router>
  )
}
export default App ;
