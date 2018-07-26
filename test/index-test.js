import { expect } from 'chai';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import BandInput from '../src/components/BandInput';
import sinon from 'sinon';
import { renderer } from '../src/index';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import manageBand from '../src/reducers/manageBand';
import Band from '../src/components/Band'
import App from '../src/App';
import BandsContainer from '../src/components/BandsContainer';

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Bands Component', () => {
  it('displays bands from Redux store', () => {
    const store = createStore(manageBand)
    sinon.stub(store, 'getState').returns({
      bands: [
        { id: 1, text: 'The Legendary Pink Dots' },
        { id: 2, text: 'The Castanets' },
        { id: 3, text: 'Cool Runnings' }
      ]
    });

    const wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.find('li')).to.have.length(3);
  });
});

describe('Band Component', () => {

  it('displays the appropriate text on form submission', () => {
    const store = createStore(manageBand)

    const wrapper = mount(<Provider store={store}><App /></Provider>)
    let input = wrapper.find('input').first()
    let form = wrapper.find('form')

    input.simulate('change', { target: { value: 'Gwar' } })
    form.simulate('submit',  { preventDefault() {} })

    expect(wrapper.text()).to.contain('Gwar');
  });

  it('renders an li', () => {
    const band = { id: 1, name: 'Momus' };
    const wrapper = shallow(<Band band={band} />);
    expect(wrapper.find('li')).to.have.length(1);
  });
});

describe('Redux', () => {

  it('assigns a unique id property when a band is added', () => {
    const store = createStore(manageBand);
    store.dispatch({type: 'ADD_BAND', name: 'Radiohead'})
    store.dispatch({type: 'ADD_BAND', name: 'Devo'})
    store.dispatch({type: 'ADD_BAND', name: 'Talking Heads'})

    let ids = store.getState()
      .bands.map(band => band.id)
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      })

    expect(ids.length).to.equal(store.getState().bands.length)

  });

  it('removes the correct band from the store on dispatch', () => {
    const store = createStore(manageBand);
    store.dispatch({type: 'ADD_BAND', name: 'Radiohead'})
    store.dispatch({type: 'ADD_BAND', name: 'Devo'})
    store.dispatch({type: 'ADD_BAND', name: 'Talking Heads'})

    expect(store.getState().bands.length).to.equal(3)


    let ids = store.getState()
      .bands.map(band => band.id)

    store.dispatch({type: 'DELETE_BAND', id: ids[1]})

    let bandNames = store.getState().bands.map(band => band.name)

    expect(store.getState().bands.length).to.equal(2)
    expect(bandNames).to.not.include("Devo")
  })
});

describe('Band Component with Redux', () => {

  it('has a button that dispatches an DELETE_BAND action', ()=> {
    const store = createStore(manageBand);
    store.dispatch({type: 'ADD_BAND', name: 'Daft Punk'})

    const wrapper = mount(<Provider store={store}><App /></Provider>);

    let deleteButton = wrapper.find('button').first();

    expect(store.getState().bands.length).to.equal(1)
    deleteButton.simulate('click',  { preventDefault() {} });
    expect(store.getState().bands.length).to.equal(0)

  });


  it('updates the state of the store to remove the component', () => {
    const store = createStore(manageBand);
    const wrapper = mount(<Provider store={store}><App /></Provider>);

    let form = wrapper.find('form');
    let input = wrapper.find('input').first();

    input.simulate('change', { target: { value: 'Shannon and the Clams' } });
    form.simulate('submit',  { preventDefault() {} });
    input.simulate('change', { target: { value: 'Brian Eno' } });
    form.simulate('submit',  { preventDefault() {} });

    expect(store.getState().bands.length).to.equal(2)
    expect(store.getState().bands[0].name).to.equal('Shannon and the Clams')
    expect(store.getState().bands[1].name).to.equal('Brian Eno')

    let deleteButton = wrapper.find('button').first();
    deleteButton.simulate('click', { preventDefault() {} });

    expect(store.getState().bands.length).to.equal(1);
    expect(store.getState().bands[0].name).to.equal('Brian Eno');
  });
});
