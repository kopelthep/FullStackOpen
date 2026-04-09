const Course = ({course}) => {
    //console.log("course is:",course)
    //header works
    return (
        <>
        <Header course = {course}/> 
        <Content course={course}/>
        <Total parts={course.parts}/>
        </>
    )
}

const Header = ({course}) => {
  //console.log(course)
  return (
    <h1>
      {course.name}
    </h1>
  )
}

const Content = ({course}) => {
  //console.log("course parts",course.parts)

  return (
    <div>
      {course.parts.map(parts => 
          <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
        )}
    </div>
  )
}

const Part = ({name,exercises}) => {
    //console.log("parts part",name,exercises)
    return(
        <>
        <p>{name} {exercises}</p>
        </>
    )

}
const Total = ({parts}) => {
    //console.log("total",parts)
    let exercises = parts.map(({ exercises }) => exercises)
    //console.log ("result",exercises)
    const sum = exercises.reduce((acc, num) => {
        //console.log("accumulator and current num",acc,num)
        return acc + num
    })
    //console.log("sum",sum)
    return(
        <p>
            <b>Total of {sum} exercises</b>
        </p>
        
    )
}


export default Course