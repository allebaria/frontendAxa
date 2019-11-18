import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchPanel } from './containers';
import { GnomeRow, GnomesList } from './components';
import * as Actions from './actions/AppActions';
import { ClipLoader } from 'react-spinners';
import './styles/App.css';

import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 50px;
`;

class App extends Component {
  constructor(props) {
		super(props)

		this.state = {
			loading: true
		}
	}

  componentDidMount() {
    const { getGnomesInfo } = this.props;
    getGnomesInfo()
      .then(() => {
        this.filterGnomesBySearch();
      })
      .catch(err => console.log(err))

  }

  onSBTextChange = (text) => {
    const { setSearchText } = this.props;
    this.setState({ loading: true })
    setSearchText(text)
      .then(() => this.filterGnomesBySearch())

  };

  onDDMenuClick = () => {

  }

  filterGnomesBySearch = () => {

    const { gnomesInfo, searchByParameter, filterGnomesInfo, searchText } = this.props;

    if(searchText=='') {
      return filterGnomesInfo(gnomesInfo)
        .then(() => this.setState({ loading: false }));
    }

    var filteredGnomesInfo = [];

    switch (searchByParameter) {
      case 'Name':
        filteredGnomesInfo = gnomesInfo.filter(gnome => gnome.name.startsWith(searchText));
        break;
      case 'Hair color':
        filteredGnomesInfo = gnomesInfo.filter(gnome => gnome.hair_color.startsWith(searchText));
        break;
      case 'Age':
        filteredGnomesInfo = gnomesInfo.filter(gnome => gnome.age.toString().startsWith(searchText));
        break;
      case 'Professions':
        filteredGnomesInfo = gnomesInfo.filter(gnome => {
          var professionMatched = false;
          gnome.professions.map(profession => {
            if(profession.startsWith(searchText)) professionMatched = true;
          })
          return professionMatched;
        });
        break;
      default:
        return;
    };
    filterGnomesInfo(filteredGnomesInfo)
      .then(() => this.setState({ loading: false }));
  }

  onDDMenuItemSelected = (item, index) => {
    const { setSearchByParameter, searchByParameter } = this.props;

    if(item !== searchByParameter) {
      setSearchByParameter(item)
        .then(() => this.filterGnomesBySearch());
    }
  }

  DDMenuListItems = ['Name', 'Hair color', 'Age', 'Professions'];
  defaultSelectedIndex = 0;

  render() {
    return (
      <div className="app-container">
        <div className="bar-container">
          <SearchPanel
            onSearchTextChange={this.onSBTextChange}
            DDMenuListItems={this.DDMenuListItems}
            onDDMenuClick={this.onDDMenuClick}
            onDDMenuItemSelected = {this.onDDMenuItemSelected}
            defaultSelectedIndex = {this.defaultSelectedIndex}
            />
        </div>
        <div className="list-container">
        {!this.state.loading && <GnomesList dataList={this.props.filteredGnomesInfo} />}
        {this.state.loading && <div className='sweet-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { gnomesInfo, searchByParameter, filteredGnomesInfo, searchText } = state.appInfo;

  return {
    gnomesInfo,
    searchByParameter,
    filteredGnomesInfo,
    searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
