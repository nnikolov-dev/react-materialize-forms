import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Chips extends Component {
  constructor(props) {
    super(props)
    this.M = window.M
    this.state = {
      uId: `chip-${Math.random()}`
    }
    this.handleChips = this.handleChips.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.completeInput = this.completeInput.bind(this)
    this.deletePrevious = this.deletePrevious.bind(this)
  }

  handleChips = (e, chip) => {
    const {onChange} = this.props
    const {uId} = this.state
    const chipInstance = this.M.Chips.getInstance(document.getElementById(uId))
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

  completeInput = (_) => {
    const {uId} = this.state
    const chipInstance = this.M.Chips.getInstance(document.getElementById(uId))
    chipInstance.addChip({
      tag: document.getElementById(uId).getElementsByClassName('input')[0].value
    })
    document.getElementById(uId).getElementsByClassName('input')[0].value = null
  }

  deletePrevious = (e) => {
    const {uId} = this.state
    const chipInstance = this.M.Chips.getInstance(document.getElementById(uId))
    if (chipInstance.chipsData.some(chip => chip.tag === e.target.innerText)) {
      if (chipInstance.chipsData[chipInstance.chipsData.length - 1].tag === e.target.innerText) {
        chipInstance.deleteChip(chipInstance.chipsData.length - 2)
      } else {
        chipInstance.deleteChip(chipInstance.chipsData.length - 1)
      }
    }
  }

  componentDidMount() {
    const {value, data, placeholder, secondaryPlaceholder, limit, minLength} = this.props
    const {uId} = this.state
    const elem = document.getElementById(uId)
    this.M.Chips.init(elem, {
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
    const autoComplete = elem.getElementsByClassName('autocomplete-content')[0]
    const input = elem.getElementsByClassName('input')[0]
    input.addEventListener('blur', this.completeInput)
    autoComplete.addEventListener('click', this.deletePrevious)
  }

  render() {
    const {uId} = this.state
    return (
      <div className='input-field'>
        <div id={uId} className='chips chips-placeholder chips-initial chips-autocomplete' />
      </div>
    )
  }
}

Chips.propTypes = {
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
