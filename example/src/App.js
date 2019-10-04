import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TextInput, Select, Chips, TextArea, FileInput, Range, CheckBox, RadioButton, Switch } from 'react-materialize-forms'
export default () => {

  const autoCompleteData = {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  }

  const chipsData = [
    { tag: 'Apple' },
    { tag: 'Microsoft' },
    { tag: 'Google' }
  ]

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
          <div className="collection">
            <a href="#text-input" alt="Text Input" className="collection-item">Text Input</a>
            <a href="#text-input-default" alt="Default" className="collection-item">+ Default</a>
            <a href="#text-input-autocomplete" alt="AutoComplete" className="collection-item">+ AutoComplete</a>
            <a href="#select" alt="Select" className="collection-item">Select</a>
            <a href="#chips" alt="Chips" className="collection-item">Chips</a>
            <a href="#text-area" alt="TextArea" className="collection-item">TextArea</a>
            <a href="#file-input" alt="FileInput" className="collection-item">FileInput</a>
            <a href="#file-input-single" alt="Single File" className="collection-item">+ Single File</a>
            <a href="#file-input-multiple" alt="Multiple Files" className="collection-item">+ Multiple Files</a>
            <a href="#range" alt="Range" className="collection-item">Range</a>
            <a href="#check-box" alt="Checkbox" className="collection-item">Checkbox</a>
            <a href="#radio-button" alt="RadioButton" className="collection-item">RadioButton</a>
            <a href="#radio-button-default" alt="Default" className="collection-item">+ Default</a>
            <a href="#radio-button-gap" alt="With Gap" className="collection-item">+ With Gap</a>
            <a href="#switch" alt="Switch" className="collection-item">Switch</a>
          </div>
        </div>
        <div className="col m9">
          <h3 id="text-input">TextInput</h3>
          <h4 id="text-input-default">Default</h4>
          <TextInput label="TextInput Component" onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'
            
export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <TextInput
      label="TextInput Component"
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h4 id="text-input-autocomplete">AutoComplete</h4>
          <TextInput label="TextInput Component with AutoComplete" data={autoCompleteData} onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  const autoCompleteData = {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  }

  return (
    <TextInput
      label="TextInput Component with AutoComplete"
      data={autoCompleteData}
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>

          <br />
          <h3 id="select">Select</h3>
          <Select data={selectData} onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  const selectData = [{ name: 'high', value: 'High' }, { name: 'medium', value: 'Medium' }, { name: 'low', value: 'Low' }]

  return (
    <Select
      data={selectData}
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h3 id="chips">Chips</h3>
          <Chips placeholder="Chips Component" secondaryPlaceholder="Add more" data={autoCompleteData} value={chipsData} onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  // Data used for the AutoComplete Suggestions
  const autoCompleteData = {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  }

  // Default Chips displayed
  const chipsData = [
    { tag: 'Apple' },
    { tag: 'Microsoft' },
    { tag: 'Google' }
  ]

  return (
    <Chips
      onChange={inputHandle}
      placeholder="Chips Component"
      secondaryPlaceholder="Add more"
      data={autoCompleteData}
      value={chipsData}
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h3 id="text-area">TextArea</h3>
          <TextArea label="TextArea" onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <TextArea
      label="TextArea"
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h3 id="file-input">FileInput</h3>
          <h4 id="file-input-single">Single File</h4>
          <FileInput placeholder="Select a File" onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <FileInput
      placeholder="Select a File"
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <h4 id="file-input-multiple">Multiple Files</h4>
          <FileInput placeholder="Select multiple Files" onChange={inputHandle} multiple />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <FileInput
      placeholder="Select a multiple Files"
      onChange={inputHandle}
      multiple
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h3 id="range">Range</h3>
          <Range value="15" />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <Range
      value="15"
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h3 id="check-box">CheckBox</h3>
          <CheckBox
            label="Filled In"
            filled
            value
            onChange={inputHandle}
          />
          <CheckBox
            label="Selected"
            value
            onChange={inputHandle}
          />
          <CheckBox
            label="Filled In"
            filled
            value
            onChange={inputHandle}
          />
          <CheckBox
            label="Disabled Default"
            disabled
            onChange={inputHandle}
          />
          <CheckBox
            label="Disabled Selected"
            value
            disabled
            onChange={inputHandle}
          />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <CheckBox
      label="Filled In"
      filled
      value
      onChange={inputHandle}
    />
    <CheckBox
      label="Selected"
      value
      onChange={inputHandle}
    />
    <CheckBox
      label="Filled In"
      filled
      value
      onChange={inputHandle}
    />
    <CheckBox
      label="Disabled Default"
      disabled
      onChange={inputHandle}
    />
    <CheckBox
      label="Disabled Selected"
      value
      disabled
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <h3 id="radio-button">RadioButton</h3>
          <h4 id="radio-button-default">Default</h4>
          <RadioButton label="Same Group" group="radio-group" onChange={inputHandle} />
          <RadioButton label="Same Group" group="radio-group" onChange={inputHandle} />
          <RadioButton label="Same Group" group="radio-group" onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <RadioButton
      label="Same Group"
      group="radio-group"
      onChange={inputHandle}
    />
    <RadioButton
      label="Same Group"
      group="radio-group"
      onChange={inputHandle}
    />
    <RadioButton
      label="Same Group"
      group="radio-group"
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h4 id="radio-button-gap">With Gap</h4>
          <RadioButton label="Same Group" group="radio-group" gap onChange={inputHandle} />
          <RadioButton label="Same Group" group="radio-group" gap onChange={inputHandle} />
          <RadioButton label="Same Group" group="radio-group" gap onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <RadioButton
      label="Same Group"
      group="radio-group"
      gap
      onChange={inputHandle}
    />
    <RadioButton
      label="Same Group"
      group="radio-group"
      gap
      onChange={inputHandle}
    />
    <RadioButton
      label="Same Group"
      group="radio-group"
      gap
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
          <br />
          <h3 id="switch">Switch</h3>
          <Switch onChange={inputHandle} />
          <SyntaxHighlighter language="jsx" style={docco}>
            {`import react from 'React'

export default () => {

  const inputHandle = (input) => console.log(input)

  return (
    <Switch
      onChange={inputHandle}
    />
  )
}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )

}
