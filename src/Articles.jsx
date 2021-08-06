import React from 'react'
import{
    Link
  } from "react-router-dom";
  import './article.css'
  import { Switch,Route } from 'react-router-dom'
import Romance from './Romance';
import './article.css';
import Horror from './Horror';
import Other from './Other'
const Articles = () => {
    return (
        <div className="articles">
            {/* romance */}
            <button className="romance">
                <Link to='/article/romance'>Romance</Link>
            </button>
            {/* <Romance/> */}
            {/* horror */}
            <button className="horror">
            <Link to='/article/horror'>Horror</Link>
            </button>
            {/* <Horror/> */}
            {/* other */}
            <button className="other">
            <Link to='/article/other'>Other</Link>
            </button>
            {/* <Switch>
            <Route exact  path='/article/romance' component={Romance}/>
            <Route exact path='/article/horror' component={Horror}/>
            <Route exact path='/article/other' component={Other}/>
            <Route component={Error}/>
        </Switch> */}
        </div>
        
    )
}

export default Articles
