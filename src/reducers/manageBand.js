let id = 0
export default function manageBand(state = {bands: []}, action){
  switch (action.type) {
    case 'ADD_BAND':
      id++
      let band = Object.assign({}, {text: action.payload}, {id: id})
      return Object.assign(state, {}, {bands: state.bands.concat(band)})
    case 'DELETE_BAND':
      let bands = state.bands.filter(function(band){
        return band.id !== action.id
      })
      return Object.assign(state, {}, {bands: bands})
    default:
      return state;
  }
}
