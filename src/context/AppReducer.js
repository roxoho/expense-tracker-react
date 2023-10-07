export default (state, action) => {
    switch (action.type) {
      case 'Shuffle':
        return { ...state, numbers: action.payload };
      default:
        return state;
    }
  };
  