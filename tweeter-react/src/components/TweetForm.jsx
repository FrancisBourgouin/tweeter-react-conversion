import { useState } from "react"
import "./TweetForm.css"

export default function TweetForm(props) {
  const [tweetText, setTweetText] = useState("")

  const tweetRemainingLength = 140 - tweetText.length
  const spanStyle = { color: tweetRemainingLength >= 0 ? "black" : "red" }

  const submitTweet = event => {
    event.preventDefault()
  }

  return (
    <section className="newtweet">
      <form onSubmit={submitTweet} className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
        <input type="submit" value="Tweet" className="form__input" onChange={event => setTweetText(event.target.value)} />
        <span style={spanStyle} className="form__counter">{tweetRemainingLength}</span>
      </form>
    </section>
  )
}