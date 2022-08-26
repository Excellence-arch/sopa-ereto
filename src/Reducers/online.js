const initState = {
  status: true,
  id: ''
};

const online = (state = initState, action) => {
  switch (action.type) {
    case 'STATUS':
      return {
        ...state,
        status: true,
        id: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        status: false,
        id: ''
      };
    default:
      return {
        ...state
      };
  }
};

export default online;
