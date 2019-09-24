import React from 'react'

import {TextInput, Select, Chips} from 'react-materialize-forms'
export default function App(){

  const autoCompleteData = {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  }

  const chipsData = [
    {tag: 'Apple'},
    {tag: 'Microsoft'},
    {tag: 'Google'}
  ]

  const selectData = [{ name: 'high', value: 'High' }, { name: 'medium', value: 'Medium' }, { name: 'low', value: 'Low' }]

  const inputHandle = (input) => console.log(input)

  return (
    <div className="container">
      <dic class="row">

      </dic>
      <div className="card-panel indigo white-text">
        <h6>react-materialize-forms</h6>
        <a href="https://github.com/nnikolov-dev/react-materialize-forms" alt="GitHub">GitHub</a>
      </div>
      <div className="row">
        <div className="col m8">
          <TextInput label="TextInput Component" onChange={inputHandle} />
          <TextInput label="TextInput Component with AutoComplete" data={autoCompleteData} onChange={inputHandle} />
          <Select data={selectData} onChange={inputHandle} />
          <Chips onChange={selectData} placeholder="Chips Component" secondaryPlaceholder="Add more" data={autoCompleteData} value={chipsData} onChange={inputHandle} onSelect={inputHandle} />
        </div>
        <div className="col m4">

        </div>
      </div>
    </div>
  )

}
