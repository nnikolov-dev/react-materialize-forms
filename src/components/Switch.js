import React from 'react'
import PropTypes from 'prop-types'

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const { value } = this.state
    this.setState((prevState) => ({ value: !prevState.value }))
    const { onChange } = this.props
    if (onChange) {
      onChange(!value)
    }
  }

  render() {
    const { left, right, disabled } = this.props
    const { value } = this.state
    return (
      <div className='switch'>
        <label>
          {left}
          <input type='checkbox' onChange={this.handleChange} checked={value} disabled={disabled ? 'disabled' : ''} />
          <span className='lever' />
          {right}
        </label>
      </div>
    )
  }
}

Switch.propTypes = {
  value: PropTypes.bool,
  left: PropTypes.string,
  right: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

Switch.defaultProps = {
  value: false,
  left: null,
  right: null,
  disabled: false,
  onChange: null
}

export default Switch
