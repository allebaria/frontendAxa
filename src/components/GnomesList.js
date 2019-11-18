import React, { Component } from 'react';
import { GnomeRow } from './';

const GnomesList = (props) => {
  const { dataList } = props;
  return(
    <div>
      {dataList.map(gnome => {
        return <GnomeRow gnome={gnome} />
      })}
    </div>
  )
}

export default GnomesList
