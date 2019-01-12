import React, {Component} from 'react';
import Slider from "rc-slider";
import Tooltip from 'rc-tooltip';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const Handle = Slider.Handle;
const handle = (props) => {
  const {value, dragging, index, ...restProps} = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class MySlider extends Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <Slider
        value={value}
        handle={handle}
        min={1}
        max={10}
        onChange={onChange}
      />
    );
  }
}

export default MySlider;