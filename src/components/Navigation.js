import React from 'react'
import './Navigation.css';

export const Navigation = () => {

  return(
    <nav>
      <span id="tweeter">tweeter</span>
      <div id="tweet-form-toggle">
        <p><b>Write</b> a new tweet</p>
        <i className="fas fa-angle-down"></i>
    </div> 
  </nav>
  )
}