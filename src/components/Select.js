import React, { Component } from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css'

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uId: `select-${Math.random()}`
    }
  }

  componentDidMount() {
    const {uId} = this.state
    const elem = document.getElementById(uId)
    M.FormSelect.init(elem, {})
  }

  render() {
    const {s, m, l, xl, placeholder, data, onChange, value} = this.props
    const {uId} = this.state
    return (
      <div className={`input-field col s${s} m${m} l${l} xl${xl}`}>
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
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func,
  value: PropTypes.string
}

Select.defaultProps = {
  s: 12,
  m: null,
  l: null,
  xl: null,
  placeholder: 'Select a value',
  data: [],
  onChange: null,
  value: null
}

export default Select
