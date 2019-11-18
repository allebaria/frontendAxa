import React, { Component } from 'react';
import { SearchPanel } from '../components';

class SearchPanelContainer extends Component {
  constructor(props) {
		super(props)
		this.state = {
			text: '',
      isDDOpened: false,
      DDSelectedItemIndex: null
		}
	}

  onSearchTextChange = (event) => {
    const text = event.target.value;
    const { onSearchTextChange } = this.props;
    this.setState({ text });
    onSearchTextChange(text);

  }

  onDDMenuClick = (event) => {
    const { onDDMenuClick } = this.props;
    const currentDDState = this.state.isDDOpened;

    this.setState({ isDDOpened: !currentDDState });
    onDDMenuClick();
  }

  onListItemClick = (item, index) => {
    this.props.onDDMenuItemSelected(item, index);
    this.setState({ DDSelectedItemIndex: index })
  }

  getSelectedIndex = () => {
    if(!this.state.DDSelectedItemIndex) return this.props.defaultSelectedIndex;
    else return this.state.DDSelectedItemIndex;
  }

  render() {
    const { DDMenuListItems } = this.props;
    const { isDDOpened } = this.state;
    return(
      <SearchPanel
        onTextChange={this.onSearchTextChange}
        onDDMenuClick={this.onDDMenuClick}
        isDDOpened={isDDOpened}
        DDMenuListItems = {DDMenuListItems}
        onListItemClick = {this.onListItemClick}
        selectedIndex={this.getSelectedIndex()}
      />
    )
  }
}

export default SearchPanelContainer;
