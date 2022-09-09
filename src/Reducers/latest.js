import pics from '../assets/Michael.jpg';
const initState = {
  blocks: [
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    }
  ],
  transactions: [
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    }
  ]
};

const latest = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default latest;
