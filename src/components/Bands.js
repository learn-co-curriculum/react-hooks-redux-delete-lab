import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band {...band} deleteBand={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;
