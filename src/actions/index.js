export const addFeature = (name, price) => {
  return {
    type: 'ADD_FEATURE',
    payload: { name, price }
  };
};