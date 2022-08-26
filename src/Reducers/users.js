const initState = {
  name: '',
  email: '',
  picture: ''
};

const users = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default users;
