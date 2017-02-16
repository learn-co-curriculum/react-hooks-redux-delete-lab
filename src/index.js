import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import createStore from './createStore';
import manageBand from './reducers/manageBand';

const store = createStore(manageBand);

function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

// not directly exporting the render function
// because need to stub it out in tests.
export const renderer = { render: render };

store.dispatch({ type: 'buddy' });
