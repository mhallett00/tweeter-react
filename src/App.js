import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweets } from './components/Tweets';

const initialTweetData = [
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
  },
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

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  

  const addNewTweet = text => {
    const newTweet = {
        name: "Amy Mansell",
        handle:"@heyitsamy",
        profile_image: "https://i.imgur.com/nlhLi3I.png",
        text,
        date: "15 days ago"
      }
      setTweetData([newTweet, ...tweetData]);
  }

  return (
    <div className="App"> 
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm addNewTweet={addNewTweet}/>
        <Tweets tweetData={tweetData}/>
      </main>
    </div>
  );
}

export default App;
