const initState = {
  baseUrl: 'https://sopa-ereto.herokuapp.com/'
};

const url = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default url;
