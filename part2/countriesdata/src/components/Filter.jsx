export const Filter = ({ value, onReset, onChange }) => {
  
  return (

    <form onSubmit={onReset}>
      <div>
        Name to search: <input
          value={value}
          onChange={onChange} />
      </div>
      <div>
        <button type="submit">Reset</button>
      </div>
    </form>

  );
};
