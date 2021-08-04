import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Tweet from './components/Tweet';
import TweetForm from './components/TweetForm';

const initialTweetData = [
  {
    name: "Francis Bourgouin",
    handle: "@Cadaei",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "What do you think of dragons, kittens and chickens?",
    date: "10 days ago"
  },
  {
    name: "Amy Mansell",
    handle: "@heyitsamy",
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: "What do you think of hexagons?",
    date: "10 days ago"
  }
]

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  const tweets = tweetData.map((tweet, index) => (
    <Tweet
      key={index}
      name={tweet.name}
      handle={tweet.handle}
      profile_image={tweet.profile_image}
      text={tweet.text}
      date={tweet.date}
    />
  ))

  const addNewTweet = () => {
    const newTweet = {
      name: "Amy Mansell",
      handle: "@heyitsamy",
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: "What do you think of triangles?",
      date: "5 days ago"
    }

    setTweetData([newTweet, ...tweetData])
  }

  return (
    <div className="App" onClick={addNewTweet}>
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <section className="tweets">
          {/* Pre mapping */}
          {/* <Tweet
            name={tweets[0].name}
            handle={tweets[0].handle}
            profile_image={tweets[0].profile_image}
            text={tweets[0].text}
            date={tweets[0].date}
          />
          <Tweet
            name={tweets[1].name}
            handle={tweets[1].handle}
            profile_image={tweets[1].profile_image}
            text={tweets[1].text}
            date={tweets[1].date}
          /> */}
          {/* Post mapping */}
          {tweets}
        </section>
      </main>
    </div>
  );
}

export default App;
