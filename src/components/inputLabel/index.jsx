import React, {Component} from 'react';

class InputLabel extends Component {
  constructor(props) {
    super(props);
    this.el = null
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.autoFocus && nextProps.autoFocus) {
      this.el.focus()
    }
  }

  handleSetRef = el => {
    if (!this.el) {
      this.el = el;
    }
  };

  handelOnChange = (e) => {
    const {name, onChange} = this.props;
    onChange({[name]: e.target.value});
  };

  handleIsFocused = () => {
    const {autoFocus, setFocus, name} = this.props;
    if (!autoFocus) {
      setFocus(name)
    }
  }

  render() {

    const {addClass, name, value, label, autoFocus, setFocus} = this.props;
    return (
      <div className={`form-group ${addClass}`}>
        <label
          className="control-label"
          htmlFor={name}>
          {label}
        </label>
        <input
          ref={this.handleSetRef}
          id={name}
          autoFocus={autoFocus}
          type="text"
          className={`form-control ${addClass}`}
          value={value}
          onChange={this.handelOnChange}
          onFocus={this.handleIsFocused}
        />
      </div>
    );
  }
}

export default InputLabel;