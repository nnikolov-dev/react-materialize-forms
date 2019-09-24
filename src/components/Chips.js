import React, { Component } from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css'

class Chips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uId: `chip-${Math.random()}`
    }
    this.handleChips = this.handleChips.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleFocusOut = this.handleFocusOut.bind(this)
  }

  handleChips = (e, chip) => {
    const {onChange} = this.props
    const {uId} = this.state
    const chipInstance = M.Chips.getInstance(document.getElementById(uId))
    if (onChange) {
      onChange(chipInstance.chipsData.map((chip) => (chip.tag)))
    }
  }

  handleSelect = (_, chip) => {
    const {onSelect} = this.props
    if (onSelect) {
      onSelect(chip.firstChild.data)
    }
  }

  handleFocusOut = (e) => {
    const {uId} = this.state
    const chipInstance = M.Chips.getInstance(document.getElementById(uId))
    chipInstance.addChip({
      tag: e.target.value
    })
    e.target.value = null
  }

  componentDidMount() {
    const {value, data, placeholder, secondaryPlaceholder, limit, minLength} = this.props
    const {uId} = this.state
    const elem = document.getElementById(uId)
    M.Chips.init(elem, {
      data: value,
      placeholder,
      secondaryPlaceholder,
      autocompleteOptions: {
        data,
        limit,
        minLength
      },
      onChipAdd: this.handleChips,
      onChipSelect: this.handleSelect,
      onChipDelete: this.handleChips
    })
    this.setState({chipsCount: M.Chips.getInstance(document.getElementById(uId)).chipsData.length})
    const inputInstance = document.getElementById(uId).getElementsByClassName('input')[0]
    inputInstance.addEventListener('blur', this.handleFocusOut)
  }

  render() {
    const {s, m, l, xl} = this.props
    const {uId} = this.state
    return (
      <div className={`input-field col s${s} m${m} l${l} xl${xl}`}>
        <div id={uId} className='chips chips-placeholder chips-initial chips-autocomplete' />
      </div>
    )
  }
}

Chips.propTypes = {
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
  placeholder: PropTypes.string,
  secondaryPlaceholder: PropTypes.string,
  data: PropTypes.object,
  value: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string
  })),
  limit: PropTypes.number,
  minLength: PropTypes.number,
  onChange: PropTypes.func,
  onSelect: PropTypes.func
}

Chips.defaultProps = {
  s: 12,
  m: null,
  l: null,
  xl: null,
  placeholder: '',
  secondaryPlaceholder: '',
  data: {},
  value: [],
  limit: Infinity,
  minLength: 1,
  onChange: null,
  onSelect: null
}

export default Chips
