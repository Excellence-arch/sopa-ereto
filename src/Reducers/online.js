const initState = {
  status: false,
  id: '',
  email: '',
  typeOf: '',
  userId: ''
};

const online = (state = initState, action) => {
  switch (action.type) {
    case 'STATUS':
      return {
        ...state,
        id: action.payload._id,
        status: true,
        email: action.payload.email,
        typeOf: action.payload.typeOf,
        userId: action.payload.userId
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
