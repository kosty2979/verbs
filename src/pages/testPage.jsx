import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {increaseCount, resetCount} from '../actions/verbs';

import {Badges, CheckedForm, MySlider, YouWin} from '../components';


class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verb: {
        translate: '',
        first: '',
        second: '',
        third: ''
      },
      readyVerbs: [],
      verbs: [],
      maxCount: 2,
      initial: false,
      done: false
    }
  }

  componentDidMount() {
    this.filtersVerb(this.props.verbs);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.verbs !== this.props.verbs) {
      this.filtersVerb(nextProps.verbs)
    }
  }

  filtersVerb(items) {
    const verbs = [];
    const readyVerbs = [];
    items.forEach(i => {
      if (i.check >= this.state.maxCount) {
        readyVerbs.push(i)
      } else {
        verbs.push(i)
      }
    });
    this.setState({readyVerbs, verbs}, this.createNewVerb)
  }

  createNewVerb = (incremet) => {
    if (incremet) (
      this.props.dispatch(increaseCount(this.state.verb.id))
    );
    const {initial, verbs} = this.state;
    if (verbs.length === 0 && !initial) {
      return
    }

    if (verbs.length > 0) {
      const index = Math.floor(Math.random() * (verbs.length));
      const verb = verbs[index];
      this.setState({verb: verb});
      if (!initial) {
        this.setState({initial: true})
      }
    } else {
      this.setState({done: true});
      this.props.dispatch(resetCount())
    }
  };

  handleSliderChange = (num) => {
    this.setState({maxCount: num})
  };

  render() {
    const {maxCount, initial, done, verb, readyVerbs} = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <div className={'sliderWrapper'}>
            <p>Set count for repeat verb ({maxCount})</p>
            <MySlider
              value={maxCount}
              onChange={this.handleSliderChange}
            />
          </div>
          <div className="clearfix"/>
        </div>
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          {initial && !done ?
            <CheckedForm
              verb={verb}
              createNew={this.createNewVerb}
            />
            :
            <h3 className="text-center">
              Go to
              <Link to={'/'}> table </Link>
              and set verbs for learn
            </h3>
          }
          {
            done &&
            <YouWin/>
          }
          {
            readyVerbs.length !== 0 &&
            <Badges items={readyVerbs}/>
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const {initialVerbs} = state.verbs;
  return {
    verbs: initialVerbs.filter(i => i.toShow),
  }
};

export default connect(mapStateToProps)(TestPage);