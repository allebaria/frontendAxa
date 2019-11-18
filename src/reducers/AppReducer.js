import { GET_GNOMES_INFO, SET_SEARCH_BY_PARAMETER, FILTER_GNOMES_INFO, SET_SEARCH_TEXT } from '../actions/actionTypes';

const initialState = {
  gnomesInfo: null,
  searchByParameter: 'Name',
  searchText: '',
  filteredGnomesInfo: []
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GNOMES_INFO:
      return {
        ...state,
        gnomesInfo: action.payload
      };
    case SET_SEARCH_BY_PARAMETER:
      return {
        ...state,
        searchByParameter: action.payload
      };
    case FILTER_GNOMES_INFO:
      return {
        ...state,
        filteredGnomesInfo: action.payload
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    default:
      return state;
  }
}

export default AppReducer;
