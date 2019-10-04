import React from 'react'
import PropTypes from 'prop-types'

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uId: `text-area-${Math.random()}`,
      value: props.value
    }
    this.textArea = React.createRef()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const { onChange } = this.props
    const value = e.target.files
    this.setState({ value })
    if (onChange) {
      onChange(value)
    }
  }

  render() {
    const { placeholder, label, multiple } = this.props
    const { uId, value } = this.state
    return (
      <div className='file-field input-field'>
        <div className='btn'>
          <span>{label}</span>
          {multiple ? <input type='file' onChange={this.handleChange} multiple /> : <input type='file' onChange={this.handleChange} />}
        </div>
        <div className='file-path-wrapper'>
          <input
            id={uId}
            className='file-path validate'
            type='text'
            value={value}
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }
}

FileInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  multiple: PropTypes.bool
}

FileInput.defaultProps = {
  placeholder: null,
  onChange: null,
  label: 'File',
  value: null,
  multiple: false
}

export default FileInput
