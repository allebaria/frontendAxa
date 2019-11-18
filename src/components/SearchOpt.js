import React from 'react';
import FontAwesome from 'react-fontawesome'
import '../styles/SearchOpt.css';

const SearchOpt = props => {
  const { onClick, isDDOpened } = props;

  return (
    <div className="searchOpt-header" onClick={onClick}>
      <div className="col-9 nopadding">Search by...</div>
      <div className="col-3 nopadding">
      {isDDOpened
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
      </div>
    </div>
  );
}

export default SearchOpt;
