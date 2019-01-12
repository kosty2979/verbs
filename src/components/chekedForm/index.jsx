import React, {Component} from 'react';

import InputLabel from '../inputLabel';

const verbForms = ['first', 'second', 'third'];

export default class CheckedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: '',
      check: false,
      error: false,
      active: verbForms[0]
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }


  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }

  setCheck(val) {
    const error = this.state.first.trim().toLowerCase() !== this.props.verb.first ||
      this.state.second.trim().toLowerCase() !== this.props.verb.second ||
      this.state.third.trim().toLowerCase() !== this.props.verb.third;
    this.setState({check: val, error: error})
  }

  checkClass(type) {
    if (!this.state.check) return '';
    const error = this.state[type].trim().toLowerCase() !== this.props.verb[type];
    return ((error ? ' has-error' : ' has-success'))
  }

  createNew(update) {
    const {error} = this.state;
    this.setState({
      first: '',
      second: '',
      third: '',
      check: false,
      error: false,
      active: verbForms[0]
    });
    this.props.createNew(update && !error);
  }

  setNextActive(e) {
    e.preventDefault();
    const index = verbForms.indexOf(this.state.active);
    const active = index + 1 > verbForms.length - 1 ? verbForms[0] : verbForms[index + 1];
    this.setState({active})
  }

  setInput = (obj) => {
    this.setState(obj)
  };

  handleNext = () => {
    if (this.state.check) {
      this.createNew(true)
    } else (
      this.setCheck(true)
    )
  };

  handleKeyPress = (e) => {
    switch (e.key) {
      case 'Enter':
        this.handleNext();
        break;
      case 'Escape':
        this.createNew();
        break;
      case 'Tab':
        this.setNextActive(e);
        break;
      default:
        break;
    }
  };

  handleSetFocus = (str) => {
    this.setState({active: str})
  };

  render() {
    const {verb} = this.props;
    const {first, second, third, check, active} = this.state;
    return (
      <div>
        <h3 className="text-center">Verb</h3>
        <div className="thumbnail">
          <h4>{verb.translate}</h4>
          <InputLabel
            addClass={this.checkClass('first')}
            name='first'
            value={first}
            label={check ? verb.first : 'Infinitive'}
            autoFocus={active === 'first'}
            setFocus={this.handleSetFocus}
            onChange={this.setInput}
          />
          <InputLabel
            addClass={this.checkClass('second')}
            name='second'
            value={second}
            label={check ? verb.second : 'Past'}
            autoFocus={active === 'second'}
            setFocus={this.handleSetFocus}
            onChange={this.setInput}
          />
          <InputLabel
            addClass={this.checkClass('third')}
            name='third'
            value={third}
            label={check ? verb.third : 'Past participle'}
            autoFocus={active === 'third'}
            setFocus={this.handleSetFocus}
            onChange={this.setInput}
          />
          <div className="pull-left formText">
            <p>Press <b>Tab</b> for navigate</p>
            <p>Press <b>Esc</b> for skip verb</p>
          </div>
          <div className="btn-group pull-right">
            <button
              className="btn btn-success "
              onClick={this.handleNext}
            >
              {`${this.state.check ? 'Next' : 'Check'} (enter)`}
            </button>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}