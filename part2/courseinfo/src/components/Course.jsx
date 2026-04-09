const Course = ({course}) => {
    //console.log("course is:",course)
    //header works
    return (
        <>
        <Header course = {course}/> 
        <Content course={course}/>
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
  console.log("course parts",course.parts)
  return (
    <div>
      {course.parts.map(parts => 
          <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
        )}
    </div>
  )
}

const Part = ({name,exercises}) => {
    console.log("parts part",name,exercises)
    return(
        <>
        <p>{name} {exercises}</p>
        </>
    )

}



export default Course