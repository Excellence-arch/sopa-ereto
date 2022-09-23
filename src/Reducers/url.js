const initState = {
  baseUrl: 'https://sopa-ereto.herokuapp.com',
  diam: 'https://sopa-ereto-diam.herokuapp.com',
  payments: 'https://sopa-ereto-payments/herokuapp.com'
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
