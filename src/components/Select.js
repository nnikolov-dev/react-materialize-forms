import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
  constructor(props) {
    super(props)
    this.M = window.M
    this.state = {
      uId: `select-${Math.random()}`
    }
  }

  componentDidMount() {
    const {uId} = this.state
    const elem = document.getElementById(uId)
    this.M.FormSelect.init(elem, {})
  }

  render() {
    const {placeholder, data, onChange, value} = this.props
    const {uId} = this.state
    return (
      <div className='input-field'>
        {onChange
          ? (<select id={uId} onChange={(e) => (onChange(e.target.value))}>
            <option key='disabled' value='' disabled selected>{value || placeholder}</option>
            {data.map((option) => (
              <option key={option.key} value={option.key}>{option.value}</option>
            ))}
          </select>)
          : (<select id={uId}>
            <option key='disabled' value='' disabled selected>{value || placeholder}</option>
            {data.map((option) => (
              <option key={option.key} value={option.key}>{option.value}</option>
            ))}
          </select>)}
      </div>
    )
  }
}

Select.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func,
  value: PropTypes.string
}

Select.defaultProps = {
  placeholder: 'Select a value',
  data: [],
  onChange: null,
  value: null
}

export default Select
