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
      <main class="container">
        <TweetForm />
        <Tweet />
      </main>
    </div>
  );
}

export default App;
