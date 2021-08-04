import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Tweet from './components/Tweet';
import TweetForm from './components/TweetForm';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetForm />
      <Tweet />
    </div>
  );
}

export default App;
