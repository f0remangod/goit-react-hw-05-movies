import { useState } from 'react';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;

    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Search query can not be empty.');
      return;
    }
    onSubmit(inputValue);
    clearForm();
  };

  const clearForm = () => {
    setInputValue('');
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>🔍</SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        onChange={handleInputChange}
        className="input"
        value={inputValue}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films in database"
      />
    </Form>
  );
};
