
export const Persons = ({ namesToShow, deletePerson }) => {
  
  return (
    <>
      {namesToShow.map((person) => (
        <li key={person.id}>
            {person.name} : {person.number}
            <button onClick={() => deletePerson(person.id)}>Delete {person.name} ?</button>
        </li>
      ))}
    </>
  )
}
