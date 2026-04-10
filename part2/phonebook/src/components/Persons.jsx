import Numbers from "./Numbers"
export const Persons = ({ namesToShow }) => {
  return (
    <>
      {namesToShow.map((person) => (
        <Numbers key={person.name} name={person.name} number={person.number} />
      ))}
    </>
  )
}