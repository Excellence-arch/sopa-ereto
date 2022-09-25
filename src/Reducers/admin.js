import pix from '../assets/Michael.jpg';
let storage = {
  status: false,
  id: '',
  email: '',
  name: '',
  accountNumber: ''
};
if (localStorage.adminState) {
  storage = JSON.parse(localStorage.adminState);
}

const initState = {
  status: storage.status,
  id: storage.id,
  email: storage.email,
  name: storage.name,
  pix,
  accountNumber: storage.accountNumber
};

const admin = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN ADMIN':
      localStorage.adminState = JSON.stringify({
        ...state,
        status: true,
        email: action.payload.email,
        name: action.payload.conservancy,
        id: action.payload.userId,
        accountNumber: action.payload.accountNumber
      });
      return {
        ...state,
        status: true,
        email: action.payload.email,
        name: action.payload.conservancy,
        id: action.payload.userId,
        accountNumber: action.payload.accountNumber
      };
    case 'LOGOUT ADMIN':
      localStorage.adminState = JSON.stringify({
        ...state,
        status: false,
        email: '',
        name: '',
        id: '',
        accountNumber: ''
      });
      return {
        ...state,
        status: false,
        email: '',
        name: '',
        id: '',
        accountNumber: ''
      };
    default:
      return {
        ...state
      };
  }
};

export default admin;
