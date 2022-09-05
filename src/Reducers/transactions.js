import img from '../assets/Michael.jpg';

const initState = {
  quickTransactions: [
    { name: 'Oladipupo Michael', img },
    { name: 'Oladipupo Michael', img },
    { name: 'Nancy Amandi', img },
    { name: 'Nancy Amandi', img },
    { name: 'Ayo Solomon', img },
    { name: 'Ayo Solomon', img }
  ],
  recentActivities: [
    { name: 'Oladipupo Michael', img, state: 'sending', amount: '-120,24' },
    { name: 'Oladipupo Michael', img, state: 'sent', amount: '720,24' },
    { name: 'Nancy Amandi', img, state: 'sending', amount: '-120,24' },
    { name: 'Nancy Amandi', img, state: 'sending', amount: '520,24' },
    { name: 'Ayo Solomon', img, state: 'sent', amount: '120,24' },
    { name: 'Ayo Solomon', img, state: 'sending', amount: '220,24' }
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
