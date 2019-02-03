import React, { Component } from 'react'


export default class TextBox extends Component {

  state = {
    value:null
  }

  onSubmit = () => {
      return this.state.value;
  }

  onChange = (event) => {
    // console.log(event.target.value)
    this.setState({value:event.target.value});
  }

  render() {

    var TextBoxType = this.props.type
    if(TextBoxType === undefined){
        TextBoxType = "text"
    }
    return <div style={this.props.style}>
        <p>{this.props.children}</p>
        <input className={this.props.className} onChange={this.onChange} placeholder={this.props.placeholder} type={TextBoxType}></input>
      </div>
  }
}
