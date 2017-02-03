import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }
  handleOnChange(event){
    this.setState({text: event.target.value})
  }
  handleOnSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', payload: this.state.text})
    this.setState({text: ''})
  }
  render(){
    return (<div>
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <input type="text" onChange={this.handleOnChange.bind(this)}/>
        <input type="submit" />
      </form>
    </div>
    )
  }
}

export default BandInput;
