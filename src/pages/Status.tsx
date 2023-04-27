import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status(){
  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswers] = useState([
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso'
])

  function createNewAnswers(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

    return(
        <main className='status'>
          <Header title='Tweet'/>

          <Tweet content="lorem ipsum"/>

          <Separator/>

          <form onSubmit={createNewAnswers} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Bruno-S-Borges.png" alt="Bruno Borges" />
              <textarea 
                id="tweet" 
                placeholder='Tweet your answer'
                value={newAnswer}
                onKeyDown={handleHotKeySubmit}
                onChange={(event)=>{
                  setNewAnswer(event.target.value)
                }}
              ></textarea>
            </label>

            <button type='submit'>
              <PaperPlaneRight/>
              <span>Answer</span>
            </button>
          </form>


          {answers.map(answer =>{
            return <Tweet key={answer} content={answer}/>
          })}

        </main>
    )
}