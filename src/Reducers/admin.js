import pix from '../assets/Michael.jpg';

const initState = {
  status: false,
  id: 5,
  name: 'Michael Oladipupo',
  pix
};

const admin = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN ADMIN':
      return {
        ...state,
        status: true,
        id: action.payload.idNumber,
        email: action.payload.email
      };
    default:
      return {
        ...state
      };
  }
};

export default admin;
