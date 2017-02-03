import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }
  render(){
    let storeState = this.props.store.getState()
    let bands = storeState.bands.map((band) => {
      return <Band id={band.id}/>
    })
    return(
      <ul>
        {bands}
      </ul>
    )
  }
}

export default Bands;
