import pix from '../assets/Michael.jpg';

const initState = {
  status: false,
  id: '',
  email: '',
  name: '',
  pix,
  accountNumber: ''
};

const admin = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN ADMIN':
      return {
        ...state,
        status: true,
        email: action.payload.email,
        name: action.payload.conservancy,
        id: action.payload.userId,
        accountNumber: action.payload.accountNumber
      };
    default:
      return {
        ...state
      };
  }
};

export default admin;
