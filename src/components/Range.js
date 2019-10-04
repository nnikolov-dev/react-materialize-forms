import React from 'react'
import PropTypes from 'prop-types'

class Range extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      changed: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const { onChange } = this.props
    const value = e.target.value
    this.setState({ value, changed: true })
    if (onChange) {
      onChange(value)
    }
  }

  render() {
    const { min, max, label } = this.props
    const { value, changed } = this.state
    return (
      <p className='range-field'>
        <div className='center'><label>{changed ? <label>{value}/{max}</label> : label}</label></div>
        <input type='range' value={value} min={min} max={max} onChange={this.handleChange} />
      </p>
    )
  }
}

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
}

Range.defaultProps = {
  min: 0,
  max: 100,
  value: null,
  label: 'Slide to Select',
  onChange: null
}

export default Range
