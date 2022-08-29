import img from '../assets/Citi.svg.png';

const initState = {
  quickTransactions: [
    { name: 'Oladipupo Michael', img },
    { name: 'Oladipupo Michael', img },
    { name: 'Nancy Amandi', img },
    { name: 'Nancy Amandi', img },
    { name: 'Ayo Solomon', img },
    { name: 'Ayo Solomon', img }
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
