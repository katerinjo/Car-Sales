import React from 'react';

import AddedFeature from './AddedFeature';

import { connect } from 'react-redux';

import { remFeature } from '../actions';

const AddedFeatures = props => {
  console.log('addedfeatures', props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} cb={props.remFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mapstp', state)
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, { remFeature })(AddedFeatures)