

const Header = (props) => {
  //console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
    </div>
  )
}
const Total = (props) => {
  console.log("total",props)
  console.log(props.exercises[0]+props.exercises[1]+props.exercises[2])
  return (
    <p>
      Number of exercises {(props.exercises[0]+props.exercises[1]+props.exercises[2])}
    </p>
  )
}
const Part = (props) => {
  return(
    <p>
      {props.part.name} {props.part.exercise}
    </p>
  )
}




const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  //const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content parts = {[part1,part2,part3]}  />
      
      <Total exercises = {[part1.exercises, part2.exercises, part3.exercises]}/>
      
    </div>
  )
}

export default App