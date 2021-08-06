import React,{useState} from 'react'
import { Switch,Route } from 'react-router-dom'
import Articles from './Articles'
import About from './About'
import Homepage from './Homepage'
import Error from './Error' 

import{
    Link
  } from "react-router-dom";
import './app.css';
import {
    FiMail
  
} from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const App = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (

        <>
{/* Navbar */}
 <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            logo
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
            <Link to="/article">Articles</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
           
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="mailto:sneha2906singhz@gmail.com?subject = Feedback & body = Message"
                target="_blank">
                <FiMail className="mail" />
              </a>
            </li>
       
          
          </ul>

          {/* hamburget menu starts  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
{/* Navba ebds */}
{/* <Homepage Slides={SliderData}/> */}
        <Switch>
            <Route exact  path='/' component={Homepage}/>
            <Route exact path='/article' component={Articles}/>
            <Route path='/about' component={About}/>
            <Route component={Error}/>
        </Switch>
       
        </>
    )
}

export default App
