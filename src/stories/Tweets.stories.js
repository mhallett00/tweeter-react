import React from 'react'
import { Tweets } from '../components/Tweets'

export default { title: 'Tweet container' }

export const emptyTweet = () => <Tweets />

export const populatedTweet = () => {
  const tweets = [
    { name:"Descartes",
      handle: "@rd",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
      text: "Je pense , donc je suis",
      date:"4 years ago" 
    },
    {
      name: "Amy Mansell",
      handle:"@heyitsamy",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
      text: "What do you think of hexagons?",
      date: "15 days ago"
    }
  ]

  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image} text={singleTweet.text} date={singleTweet.date} />
  
  return <Tweets tweetData={tweets} />

}