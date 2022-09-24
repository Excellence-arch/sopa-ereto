const initState = {
  status: true,
  id: '',
  email: '',
  typeOf: ''
};

const online = (state = initState, action) => {
  switch (action.type) {
    case 'STATUS':
      return {
        ...state,
        id: action.payload.idNumber,
        status: true,
        email: action.payload.email,
        typeOf: action.payload.typeOf
      };
    case 'LOGOUT':
      return {
        ...state,
        status: false,
        id: ''
      };
    default:
      return {
        ...state,
        ...action.payload
      };
  }
};

export default online;
