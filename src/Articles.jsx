import React from 'react'
import{
    Link
  } from "react-router-dom";
  import './article.css'
import Romance from './Romance';
import './article.css';
const Articles = () => {
    return (
        <div className="articles">
            {/* romance */}
            <button className="romance">
                <Link to='/romance'>Romance</Link>
            </button>
            <Romance/>
            {/* horror */}
            <button className="horror">
            <Link to='/horror'>Horror</Link>
            </button>
            {/* other */}
            <button className="other">
            <Link to='/other'>Others</Link>
            </button>
        </div>
    )
}

export default Articles
