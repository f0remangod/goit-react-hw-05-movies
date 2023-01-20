import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;

    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Search query can not bee empty.');
      return;
    }
    onSubmit(inputValue);
    clearForm();
  };

  const clearForm = () => {
    setInputValue('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button type="submit">🔍</button>

      <input
        onChange={handleInputChange}
        className="input"
        value={inputValue}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films in database"
      />
    </form>
  );
};
