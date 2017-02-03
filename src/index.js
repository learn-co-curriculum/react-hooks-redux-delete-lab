import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import createStore from './createStore'
import manageBand from './reducers/manageBand'

const store = createStore(manageBand)
// not directly exporting the render function
// because need to stub it out in tests.
export const renderer = {render: render}


function render(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}



store.dispatch({type: 'buddy'})
