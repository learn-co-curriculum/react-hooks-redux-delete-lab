export default function manageBand(state = {bands: []}, action){
  switch (action.type) {
    case 'ADD_BAND':
      return Object.assign(state, {}, {bands: state.bands.concat(action.payload)})
    default:
      return state;
  }
}
