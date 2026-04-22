export const PersonForm = ({ onSubmit, nameValue, nameHandler, numberValue, numberHandler }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        Name: <input
          value={nameValue}
          onChange={nameHandler} />
      </div>
        Number: <input
          value={numberValue}
          onChange={numberHandler} />
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
