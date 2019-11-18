import React, { Component } from 'react';
import '../styles/GnomeRow.css'

const GnomeRow = (props) => {
  const { name, age, height, weight, hair_color, professions, friends, thumbnail } = props.gnome;
  return(
    <div className="d-flex flex-row row-container">
      <div className="col-4 nopadding picture-container">
        <img className="picture" src={thumbnail} />
      </div>
      <div className="col-4 nopadding mainInfo">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Height: {height} cm</div>
        <div>Weight: {weight} kg</div>
        <div>Hair color: {hair_color}</div>
      </div>
      <div className="col-4 nopadding friendsColumn">
        <div>Friends:</div>
        <ul>
        {friends.map(friend => {
          return <li>{friend}</li>
        })}
        </ul>
        <div>Professions:</div>
        <ul>
        {professions.map(profession => {
          return <li>{profession}</li>
        })}
        </ul>
      </div>
    </div>
  )
};

export default GnomeRow;
