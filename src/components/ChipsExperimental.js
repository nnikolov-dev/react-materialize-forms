import React from 'react'

class Chips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uId: `chip-${Math.random()}`,
      chips: []
    }
  }

  componentDidMount() {
    const uId = Math.random()
  }

  render() {
    return (
      <div id="chip-0.7145664660594209" class="chips chips-placeholder chips-initial chips-autocomplete input-field">
        <div class="chip" tabindex="0">Apple<i class="material-icons close">close</i></div>
        <div class="chip" tabindex="0">Microsoft<i class="material-icons close">close</i></div>
        <div class="chip" tabindex="0">g<i class="material-icons close">close</i></div>
        <div class="chip" tabindex="0">Google<i class="material-icons close">close</i></div>
        <input class="input" id="80c88e87-42c6-6917-9ecc-3f58db9cd1b6" data-target="autocomplete-options-4dbc6ffb-6c4d-48d5-3b78-73f9b3e7d248" placeholder="Add more" />
        <ul id="autocomplete-options-4dbc6ffb-6c4d-48d5-3b78-73f9b3e7d248" class="autocomplete-content dropdown-content" tabindex="0" style=""></ul>
      </div>
    )
  }
}

export default Chips
