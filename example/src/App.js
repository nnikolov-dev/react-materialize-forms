import React, { Component } from 'react'

import {ExampleComponent, AutoComplete} from 'react-materialize-forms'

export default class App extends Component {
  render () {
    return (
      <div>
        <AutoComplete />
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
