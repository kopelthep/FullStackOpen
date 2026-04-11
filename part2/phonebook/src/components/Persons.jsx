import Numbers from "./Numbers"
export const Persons = ({ namesToShow }) => {
  return (
    <>
      {namesToShow.map((person) => (
        <Numbers key={person.id} name={person.name} number={person.number} />
      ))}
    </>
  )
}