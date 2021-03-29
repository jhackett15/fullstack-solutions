import React, { useState } from 'react'
import Button from './Button'

const Statistic = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({good, bad, neutral}) => {

  const total = good + neutral + bad;
  const average = (good + (bad*-1)) / total
  const positive = good * (100/total)
  
  return(
    <div>
      {
        total === 0 ? <p>No feedback yet</p> : <div> 
      
      <h1>Statistics</h1>
      <table>
        <tbody>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>
      <Statistic text='total' value={total}/>
      <Statistic text='average' value={average}/>
      <Statistic text='positive' value={positive}/>
      </tbody>
      </table>
      
        </div>
      }
  </div>
  )

}



const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const mostVotes = votes.indexOf(Math.max.apply(null, votes))


  const displayRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

 const handleAnecdoteVote = () => {
    const newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1 
    setVotes(newVotes)
    console.log(anecdotes[selected],newVotes[selected])
  }

  return (
    <div>
      <div>
      <h1>GIVE FEEDBACK</h1>
      <Button handleClick={() => {setGood(good + 1)}} text='good' />
      <Button handleClick={() => {setNeutral(neutral + 1)}} text='neutral' />
      <Button handleClick={() => {setBad(bad + 1)}} text='bad' />
      </div>
      <div>
      
      <Statistics good={good} bad ={bad} neutral={neutral} />
      </div>
      <div>
      <p>{anecdotes[selected]}</p>
      <h2> this anectode has {votes[selected]} votes</h2>
      <Button handleClick={displayRandomAnecdote} text='next anecdote' />
      <Button handleClick={handleAnecdoteVote} text='vote!' />
    <div>
      <h2> Anecdote with the msot votes::</h2>
      <h2> {anecdotes[mostVotes]} has {votes[mostVotes]} votes</h2>
      
      </div>
    </div>
      
      
    </div>
  )
}




export default App