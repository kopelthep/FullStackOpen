const Course = ({name, parts}) => {
    console.log("course is:",name,parts)
    console.log("parts speicifically",parts)
    //header works
    return (
        <>
        <Header name = {name}/> 
        <Content parts={parts}/>
        <Total parts={parts}/>
        </>
    )
}

const Header = ({name}) => {
  //console.log(course)
  return (
    <h2>
      {name}
    </h2>
  )
}

const Content = ({parts}) => {
  console.log("course parts",parts)

  return (
    <div>
      {parts.map(parts => 
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