import pix from '../assets/Michael.jpg';

const initState = {
  status: false,
  id: '',
  email: '',
  name: '',
  userId: '',
  pix,
  accountNumber: ''
};

const admin = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN ADMIN':
      return {
        ...state,
        status: true,
        id: action.payload._id,
        email: action.payload.email,
        name: action.payload.conservancy,
        userId: action.payload.userId,
        accountNumber: action.payload.accountNumber
      };
    default:
      return {
        ...state
      };
  }
};

export default admin;
