import React from 'react';

const AdditionalFeature = props => {
  console.log('additionalfeature props', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.cb(props.feature.id)}
        className="button"
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
