import React from 'react'

const Course = ({course}) => {
  console.log('what is happening',)
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {
       parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
)
      }
      </div>
  )
}

const Part = ({name, exercises}) =>
  <p>
    {name} {exercises}
  </p>

const Total = ({parts}) => {
  const sum = parts.reduce((sum,part) => sum + part.exercises, 0)
  return(
  <div> total of : {sum} exercises</div>
  )
}


  export default Course