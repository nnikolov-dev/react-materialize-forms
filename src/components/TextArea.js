import React from 'react'
import PropTypes from 'prop-types'
class TextArea extends React.Component {
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
    const value = e.target.value
    this.setState({ value })
    if (onChange) {
      onChange(value)
    }
  }

  render() {
    const { placeholder, label } = this.props
    const { uId, value } = this.state
    return (
      <div className='input-field'>
        <textarea
          id={uId}
          ref={this.textArea}
          placeholder={placeholder}
          onChange={this.handleChange}
          className='materialize-textarea'
        >
          {value}
        </textarea>
        {label
          ? <label>{label}</label>
          : null}
      </div>
    )
  }
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string
}

TextArea.defaultProps = {
  placeholder: null,
  onChange: null,
  label: null,
  value: null
}

export default TextArea
