import React, {Component} from 'react';
import {connect} from 'react-redux';

import {VerTable} from '../components'

import {setFromBook, setSelect, setToTest} from '../actions/verbs';

class VerbsListPage extends Component {

  handleOnchange = e => {
    this.props.dispatch(setToTest({id: e.target.name, toShow: e.target.checked}))
  };

  handleSelectAll = () => {
    this.props.dispatch(setSelect(true))
  };
  handleSetFromBook = () => {
    this.props.dispatch(setFromBook())
  };


  handleUnSelectAll = () => {
    this.props.dispatch(setSelect(false))
  };

  render() {

    return (
      <div>
        <h3 className="text-center">Select verbs for learn</h3>
        <p className={'btn-group'}>
          <button
            className={'btn btn-info'}
            onClick={this.handleSetFromBook}
          >
            set verbs from book
          </button>
          <button
            className={'btn btn-info'}
            onClick={this.handleSelectAll}
          >
            select all
          </button>
          <button
            className={'btn btn-info'}
            onClick={this.handleUnSelectAll}
          >
            unselect all
          </button>
        </p>
        <div className="divider" />
        <VerTable
          verbs={this.props.verbs}
          onChange={this.handleOnchange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {verbs} = state;
  return {
    verbs: verbs.initialVerbs.sort((a, b) => (a.first > b.first) ? 1 : ((b.first > a.first) ? -1 : 0))
  }
};

export default connect(mapStateToProps)(VerbsListPage);