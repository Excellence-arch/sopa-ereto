let storage = {
  status: false,
  id: '',
  email: '',
  typeOf: '',
  userId: ''
};
if (localStorage.donorState) {
  storage = JSON.parse(localStorage.donorState);
}

const initState = {
  status: storage.status,
  id: storage.id,
  email: storage.email,
  typeOf: storage.typeOf,
  userId: storage.userId
};

const online = (state = initState, action) => {
  switch (action.type) {
    case 'STATUS':
      localStorage.donorState = JSON.stringify({
        id: action.payload._id,
        status: true,
        email: action.payload.email,
        typeOf: action.payload.typeOf,
        userId: action.payload.userId
      });
      return {
        ...state,
        id: action.payload._id,
        status: true,
        email: action.payload.email,
        typeOf: action.payload.typeOf,
        userId: action.payload.userId
      };
    case 'LOGOUT':
      localStorage.donorState = JSON.stringify({
        id: '',
        status: false,
        email: '',
        typeOf: '',
        userId: ''
      });
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
