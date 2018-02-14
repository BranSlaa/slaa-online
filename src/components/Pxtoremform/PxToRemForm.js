import React from 'react'
import ReactDOM from 'react'

class Pxtoremform extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pxValue: 0, remValue: 0.0 }

    this.incrementNumber = this.incrementNumber.bind(this)
    this.copyTextToClipboard = this.copyTextToClipboard.bind(this)
    this.updateValues = this.updateValues.bind(this)
  }

  incrementNumber(event) {
    const newValue = this.state.pxValue + 1
    this.updateValues(newValue)
  }

  decrementNumber(event) {
    const newValue = this.state.pxValue - 1
    this.updateValues(newValue)
  }

  updateValues(newValue) {
    this.setState({ pxValue: parseInt(newValue) })
    this.setState({ remValue: newValue / 16.0 })
  }

  copyTextToClipboard() {
    document.getElementById('remVal').select()
    document.execCommand('copy')
  }

  render() {
    return (
      <div>
        <input type="submit" value="+" onClick={this.incrementNumber} />
        <p>{this.state.pxValue}</p>
        <input type="submit" value="+" onClick={this.decrementNumber} />
        <p id="remVal">{this.state.remValue}</p>
        <input
          type="submit"
          value="Copy Value"
          onClick={this.copyTextToClipboard}
        />
      </div>
    )
  }
}

export default Pxtoremform
