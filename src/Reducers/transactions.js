import img from '../assets/Citi.svg.png';

const initState = {
  quickTransactions: [
    { name: 'Oladipupo Michael', img },
    { name: 'Oladipupo Michael', img },
    { name: 'Oladipupo Michael', img },
    { name: 'Oladipupo Michael', img },
    { name: 'Oladipupo Michael', img },
    { name: 'Oladipupo Michael', img }
  ]
};

const transactions = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default transactions;
