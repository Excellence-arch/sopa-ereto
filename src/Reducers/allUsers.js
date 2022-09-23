// import michael from '../assets/avatar.png';

const initState = {
  users: [
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
  ]
};

const allUsers = (state = initState, action) => {
  switch (action.payload) {
    case 'DETAILS':
      return {
        ...state,
        users: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default allUsers;
