import React from 'react';
import { SearchBar, SearchOpt } from '../components';
import FontAwesome from 'react-fontawesome'
import '../styles/SearchPanel.css';

const SearchPanel = props => {
  const { onTextChange, onDDMenuClick, isDDOpened, DDMenuListItems, onListItemClick, selectedIndex } = props;

  return (
    <div className="searchPanel-container">
      <div className="searchBarOpt-container">
        <div className="col-9 nopadding">
          <SearchBar onTextChange={onTextChange}/>
        </div>
        <div className="col-3 searchOpt-container nopadding">
          <SearchOpt onClick={onDDMenuClick} isDDOpened={isDDOpened}/>
        </div>
      </div>
      {isDDOpened && <div className='d-flex flex-row'>
        <div className="col-9 nopadding" />
        <div className="col-3 nopadding ddMenu-container">
          <ul className="DDList">
            {DDMenuListItems.map((item, index) => {
              var selected = false;
              if(index===selectedIndex) selected=true;
              return(
                <li className="DDitem" key={index} onClick={() => onListItemClick(item, index)}>{item} {selected && <FontAwesome name="check"/>}</li>
              )})
            }
          </ul>
        </div>
      </div>
      }
    </div>
  );
}

export default SearchPanel;
