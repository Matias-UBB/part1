import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Total Total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
const Header = (props) => {
  console.log(props)
  return (
    
      <h1>{props.course}</h1>
    
  )
}
const Content=(props)=>{
  console.log(props)
  return (
    <div>
      <Part part={props.part[0]} exercises={props.exercises[0]} />
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <Part part={props.part[2]} exercises={props.exercises[2]} />
    </div>   
  )
} 
const Part=(props)=>{
return(
<p>{props.part} {props.exercises}</p>
)

}
const Total=(props)=>{
  return (
    <div>
      <p>Number of exercises {props.Total} </p>
    </div>
  )
} 


ReactDOM.render(<App />, document.getElementById('root')) 

