import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"


import './Timeline.css'

export function Timeline(){

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
  'Meu Primeiro tweet',
  'Teste',
  'Deu certo tweetar!'
])

  function createNewtweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

    function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
    return(
        <main className='timeline'>
          <Header title='Home'/>


          <form onSubmit={createNewtweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Bruno-S-Borges.png" alt="Bruno Borges" />
              <textarea 
                  id="tweet" 
                  placeholder='Whats Happening?'
                  value={newTweet}
                  onKeyDown={handleHotKeySubmit}
                  onChange={(event) => {
                    setNewTweet(event.target.value)
                  }}
                  ></textarea>
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <Separator/>

          {tweets.map(tweet =>{
            return <Tweet key={tweet} content={tweet}/>
          })}

        </main>
    )
}