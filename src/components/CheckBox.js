import React from 'react'
import PropTypes from 'prop-types'

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const { onChange } = this.props
    const { value } = this.state
    this.setState((prevState) => ({ value: !prevState.value }))
    if (onChange) {
      onChange(!value)
    }
  }

  render() {
    const { label, filled, disabled } = this.props
    const { value } = this.state
    return (
      <p>
        <label>
          <input type='checkbox' onChange={this.handleChange} className={filled ? 'filled-in' : ''} disabled={disabled ? 'disabled' : ''} checked={value} />
          <span>{label}</span>
        </label>
      </p>
    )
  }
}

CheckBox.propTypes = {
  filled: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
}

CheckBox.defaultProps = {
  filled: false,
  disabled: false,
  value: false,
  label: '',
  onChange: null
}

export default CheckBox
