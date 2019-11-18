import { GET_GNOMES_INFO, SET_SEARCH_BY_PARAMETER, FILTER_GNOMES_INFO, SET_SEARCH_TEXT } from './actionTypes';
import axios from 'axios';

export const getGnomesInfo = () => dispatch => {
  return new Promise((resolve, reject) => {

    const gnomesInfoUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

    axios.get(gnomesInfoUrl)
      .then(response => {
        dispatch({
          type: GET_GNOMES_INFO,
          payload: response.data.Brastlewark
        });

        resolve()
      })
      .catch(error => {
        reject(error)
      })
  })
};

export const setSearchByParameter = (selectedParameter) => dispatch => {
  dispatch({
    type: SET_SEARCH_BY_PARAMETER,
    payload: selectedParameter
  });
  return Promise.resolve();
}

export const setSearchText = (searchText) => dispatch => {
  dispatch({
    type: SET_SEARCH_TEXT,
    payload: searchText
  });
  return Promise.resolve();
}

export const filterGnomesInfo = (filteredGnomesInfo) => dispatch => {
  dispatch({
    type: FILTER_GNOMES_INFO,
    payload: filteredGnomesInfo
  });
  return Promise.resolve();
}
