import React from 'react'
import { Tweet } from '../components/Tweet'

export default { title: 'Singular Tweet' }

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {
  const singleTweet = {
    name: "Amy Mansell",
    handle:"@heyitsamy",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "What do you think of hexagons?",
    date: "15 days ago"
  }

  // return <Tweet name={singleTweet.name} handle={singleTweet.handle} profile_image={singleTweet.profile_image} text={singleTweet.text} date={singleTweet.date} />
  
  return <Tweet {...singleTweet} />

}