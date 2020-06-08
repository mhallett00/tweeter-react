import React from 'react'
import './Tweet.css'

export const Tweet = props => {
  const { name, handle, text, profile_image, date } = props
  return(
    <>
    {name && handle && text && profile_image && date &&
    (
      <article className="tweet">
        <header>
          <img src={profile_image} alt="User Avatar" />
          <span>{name}</span>
          <div className="hidden">
            <p>{handle}</p>
          </div>
        </header>
        <div className="tweet-content">
          <p>{text}</p>
        </div>
        <footer>
          <p>{date}</p>
          <div className="hidden icons">
            <i className="fas fa-flag"></i>
            <i className="fas fa-retweet"></i>
            <i className="fas fa-heart"></i>
          </div>
        </footer>
      </article>
    )
    }
  </>
  )
}