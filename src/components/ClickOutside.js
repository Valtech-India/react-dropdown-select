import React from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends React.Component {
  container = React.createRef();
  a = false;
  componentDidMount() {
    if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
       document.addEventListener('touchmove', this.removeHandler, true);
      document.addEventListener('touchend', this.handleClick, true);
    } else {
      document.addEventListener('click', this.handleClick, true);
    }
  }

  componentWillUnmount() {
    
    if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      document.removeEventListener('touchmove', this.removeHandler, true);
      document.removeEventListener('touchend', this.handleClick , true);
    } else {
      document.removeEventListener('click', this.handleClick, true);
    }
  }

  removeHandler = () => {
    this.a = true
  }

  handleClick = (event) => {
    if(!this.a){
    const container = this.container.current;
    const { target } = event;
    const { onClickOutside } = this.props;

    if ((container && container === target) || (container && !container.contains(target))) {
      onClickOutside(event);
    }
    }else {
      this.a=false;
    }
  };

  render() {
    const { className, children } = this.props;

    return (
      <div className={className} ref={this.container}>
        {children}
      </div>
    );
  }
}

ClickOutside.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ClickOutside;
