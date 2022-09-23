// import michael from '../assets/avatar.png';

const initState = {
  rangers: [
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Ranger',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Nancy Amandi',
    //   role: 'Land Owner',
    //   img: michael,
    //   email: 'nancy9ce@gmail.com'
    // },
    // {
    //   name: 'Ayo Solomon',
    //   role: 'Ranger',
    //   img: michael,
    //   email: 'ayosolomon@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Land Owner',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Ranger',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Land Owner',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Ranger',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Land Owner',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Ranger',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Land Owner',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Ranger',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // },
    // {
    //   name: 'Oladipupo Oluwayimika',
    //   role: 'Land Owner',
    //   img: michael,
    //   email: 'oladipopomichael9@gmail.com'
    // }
  ],
  landOwners: []
};

const allUsers = (state = initState, action) => {
  switch (action.payload) {
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
