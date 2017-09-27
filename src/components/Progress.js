import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from './line';
import { Overlay } from './overlay';

class Progress extends Component {
  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      overlay: props.overlay || false
    }
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      overlay: nextProps.overlay || false
    });
  }

  /**
   * Render div with class.
   * @returns {XML}
   */
  renderProgressBar() {
    if (this.state.show) {
      return (
        <Line />
      );
    } else {
      return (null);
    }
  }

  /**
   * Render overlay.
   * @returns {XML}
   */
  renderOverlay() {
    if (this.state.overlay) {
      return (
        <Overlay />
      );
    } else {
      return (null);
    }
  }

  /**
   * React render.
   * @returns {XML}
   */
  render() {
    return (
      <div className="progress">
        {this.renderProgressBar()}
        {this.renderOverlay()}
      </div>
    );
  }
}

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */
Progress.propTypes = {
  show: PropTypes.bool,
  overlay: PropTypes.bool
};

export default Progress;
