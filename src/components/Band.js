import React, { Component } from 'react'

class Band extends Component {
  handleOnClick(){
    this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.id})
  }
  render(){
    return(
      <li>
        {this.props.text}
        <button onClick={this.handleOnClick.bind(this)}> delete </button>
      </li>
    )
  }
}

export default Band
