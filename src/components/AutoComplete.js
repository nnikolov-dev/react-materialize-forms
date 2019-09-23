import React from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uId: `autocomplete-${Math.random()}`
    }
  }

  componentDidMount() {
    const {data, onChange} = this.props
    const {uId} = this.state
    const elem = document.getElementById(uId)
    M.Autocomplete.init(elem, {
      data,
      onAutocomplete: onChange
    })
  }

  render() {
    const {s, m, l, xl, placeholder, onChange, value} = this.props
    const {uId} = this.state
    const small = s || 12
    const medium = m || small
    const large = l || medium
    const extra = xl || large
    return (
      <div className={`input-field col s${small} m${medium} l${large} xl${extra}`}>
        <input type='text' id={uId} className='autocomplete' value={value || null} placeholder={placeholder} onChange={(e) => (onChange(e.target.value))} />
      </div>
    )
  }
}

AutoComplete.propTypes = {
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

AutoComplete.defaultProps = {
  s: 12,
  m: 12,
  l: 12,
  xl: 12,
  placeholder: null,
  data: [],
  onChange: null,
  value: null
}

export default AutoComplete
