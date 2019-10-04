import React from 'react'
import PropTypes from 'prop-types'

class TimePicker extends React.Component {
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
    const { label, filledIn, disabled } = this.props
    const { value } = this.state
    return (
      <p>
        <label>
          <input type='checkbox' onChange={this.handleChange} className={filledIn ? 'filled-in' : ''} disabled={disabled ? 'disabled' : ''} checked={value} />
          <span>{label}</span>
        </label>
      </p>
    )
  }
}

TimePicker.propTypes = {
  filledIn: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
}

TimePicker.defaultProps = {
  filledIn: false,
  disabled: false,
  value: false,
  label: '',
  onChange: null
}

export default TimePicker
