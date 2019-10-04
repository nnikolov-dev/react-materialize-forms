import React from 'react'
import PropTypes from 'prop-types'

class RadioButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const { onChange, group, label } = this.props
    if (onChange) {
      onChange({ label, group })
    }
  }

  render() {
    const { group, label, gap, disabled } = this.props
    return (
      <p>
        <label>
          <input type='radio' name={group} onChange={this.handleChange} className={gap ? 'with-gap' : ''} disabled={disabled ? 'disabled' : ''} />
          <span>{label}</span>
        </label>
      </p>
    )
  }
}

RadioButton.propTypes = {
  group: PropTypes.string,
  gap: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
}

RadioButton.defaultProps = {
  group: null,
  gap: false,
  disabled: false,
  label: '',
  onChange: null
}

export default RadioButton
