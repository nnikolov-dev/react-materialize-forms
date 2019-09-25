import React, {useState, useEffect} from 'react'

import {TextInput, Select, Chips} from 'react-materialize-forms'
export default function App(){

  const [textInputAC, setTextInputAC] = useState(null)

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

  const setV = (v) => {
    console.log("Set to: " + v)
    setTextInputAC(v)
  }

  const selectData = [{ name: 'high', value: 'High' }, { name: 'medium', value: 'Medium' }, { name: 'low', value: 'Low' }]

  const inputHandle = (input) => console.log(input)

  return (
    <div className="container">
      <div className="row">
        <div className="col m3">
          <div className="card-panel indigo white-text">
            <h6>react-materialize-forms</h6>
            <a href="https://github.com/nnikolov-dev/react-materialize-forms" alt="GitHub">GitHub</a>
          </div>
          <ul>
            <li>
              TextInput
            </li>
          </ul>
        </div>
        <div className="col m9">
          <h3>TextInput</h3>
          <TextInput label="TextInput Component" onChange={inputHandle} />
          <TextInput label="TextInput Component with AutoComplete" data={autoCompleteData} onChange={inputHandle} value={textInputAC} />
          <Select data={selectData} onChange={inputHandle} />
          <Chips onChange={selectData} placeholder="Chips Component" secondaryPlaceholder="Add more" data={autoCompleteData} value={chipsData} onChange={inputHandle} onSelect={inputHandle} />
        </div>
      </div>
    </div>
  )

}
