export const addFeature = (id) => {
  return {
    type: 'ADD_FEATURE',
    payload: id
  };
};

export const remFeature = (id) => {
  console.log('remfeature called', id)
  return {
    type: 'REM_FEATURE',
    payload: id
  };
};