
export const Persons = ({ namesToShow }) => {
  return (
    <>
      {namesToShow.map((person) => (
        <li key={person.id}>
            {person.name} : {person.number}
        </li>
      ))}
    </>
  )
}
