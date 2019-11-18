import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = props => {
  const { onTextChange } = props;

  return (
    <div className="input-wrapper">
      <input className="sb-input" type="text" placeholder="Search gnomes in Brastlewark..." onChange={onTextChange} />
    </div>
  )
}

export default SearchBar;
