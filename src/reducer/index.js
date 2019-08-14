const initState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

function reducer(state = initState, action) {
  switch (action.type) {
    case 'ADD_FEATURE':
      const newFeature = state.store.find(feature => {
        return feature.id === action.payload;
      });
      console.log('newFeature', newFeature)
      console.log('id', action.payload)
      if (state.car.features.some(feature => feature.id === action.payload)) {
        return state;
      } else {
        const newCar = {
          ...state.car,
          price: state.car.price + newFeature.price,
          features: [
            ...state.car.features,
            newFeature
          ]
        };
        return {
          ...state,
          car: newCar
        };
      }
    case 'REM_FEATURE':
      const moribundIx = state.car.features.findIndex(feature => {
        return feature.id === action.payload;
      });
      console.log('moribundIx', moribundIx)
      console.log('features', state.car.features)
      if (moribundIx === -1) {
        return state;
      }
      const newPrice = state.car.price - state.car.features[moribundIx].price;
      const newFeatures = [
        ...state.car.features.slice(0, moribundIx),
        ...state.car.features.slice(moribundIx + 1)
      ];
      const newCar = {
        ...state.car,
        price: newPrice,
        features: newFeatures
      };
      return {
        ...state,
        car: newCar
      };
    default:
      return state;
  }
}

export default reducer;