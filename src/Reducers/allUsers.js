// import michael from '../assets/avatar.png';

const initState = {
  rangers: [],
  landOwners: []
};

const allUsers = (state = initState, action) => {
  switch (action.type) {
    case 'DETAILS':
      return {
        ...state,
        rangers: action.payload
      };
    case 'LAND OWNERS':
      return {
        ...state,
        landOwners: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default allUsers;
