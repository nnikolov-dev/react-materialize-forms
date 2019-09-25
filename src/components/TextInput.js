import React from 'react'
import PropTypes from 'prop-types'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.M = window.M
    this.state = {
      uId: `text-input-${Math.random()}`,
      autocomplete: false,
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const {data, onChange} = this.props
    const {uId} = this.state
    const elem = document.getElementById(uId)
    if (data && onChange) {
      this.M.Autocomplete.init(elem, {
        data,
        onAutocomplete: onChange
      })
      this.setState({autocomplete: true})
    }
  }

  handleChange = (e) => {
    const {onChange} = this.props
    const value = e.target.value
    this.setState({value})
    if (onChange) {
      onChange(value)
    }
  }

  render() {
    const {placeholder, label} = this.props
    const {uId, autocomplete, value} = this.state
    return (
      <div className='input-field'>
        <input type='text' id={uId} className={autocomplete ? `autocomplete input-field` : 'input-field'} placeholder={placeholder} value={value || ''} onChange={this.handleChange} />
        {label
          ? <label htmlFor={`#${uId}`}>{label}</label>
          : null}
      </div>
    )
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string
}

TextInput.defaultProps = {
  placeholder: null,
  data: [],
  onChange: null,
  label: null,
  value: null
}

export default TextInput
