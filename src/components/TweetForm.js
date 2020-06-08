import React, {useState} from 'react'
import './TweetForm.css'

export const TweetForm = (props) => {
  const { addNewTweet } = props
  const [ tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const  outputStyle = {color: tweetRemainingLength >= 0 ? "black" : "red"};

  const submitTweet = event => {
    event.preventDefault()
    if(tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText)
      setTweetText("");
    }

  }

  return(
    <section className="new-tweet">
        <p className='error-empty'><i className="fas fa-exclamation-triangle"></i>Please fill out the field to post!<i className="fas fa-exclamation-triangle"></i></p>
        <p className='error-overLimit'><i className="fas fa-exclamation-triangle"></i> Character limit exceeded! <i className="fas fa-exclamation-triangle"></i></p>
        <form onSubmit={submitTweet} id="submit-tweet" action="/tweets" method="POST">
          <label htmlFor="tweet-text">What are you humming about?</label>
          <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" id="tweet-text"></textarea>
          <div>
            <button type="submit">Tweet</button>
  <output style={outputStyle} name="counter" className="counter" htmlFor="tweet-text">{140 - tweetText.length}</output>
          </div>
        </form>
      </section>
  )
}