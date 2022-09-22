import axios from 'axios';
import React, { useState } from 'react';
// import { Navigate } from 'react-router';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import card from '../assets/card.png';
import circle from '../assets/circle.png';
import cards from '../assets/Rectangle.png';
import NewNav from '../Layouts/NewNav';

const Payment = () => {
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();
  const email = 'chinwenduiheanatu@gmail.com';
  const [isloading, setIsloading] = useState(false);
  const isLoadingCrypto = false;
  // const [dates, setDates] = useState('');
  // const [cardNo, setCardNo] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');
  // const [selectedMonth, setSelectedMonth] = useState('');
  // const [cvv, setCvv] = useState();
  const [error, setError] = useState(false);
  // const navigate = useNavigate();
  const url = `https://sopa-ereto-payments.herokuapp.com/mcs3/donorPay`;
  // const url = `${useSelector((state) => state.urlReducer.baseUrl)}mcs3/pay`;
  // useEffect(() => {
  //   let date = new Date();
  //   setDates(date.getFullYear());
  // }, []);

  const pay = () => {
    setIsloading(true);
    if (amount == '' || currency == '') {
      setIsloading(false);
      setError('All inputs are required');
    } else {
      axios.post(url, { amount }).then((res) => {
        if (res.data.status == 'SE200') {
          setIsloading(false);
          // console.log(res.data.data.url);
          openInNewTab(res.data.data.url);
          // navigate(res.data.url);
        } else {
          setIsloading(false);
          console.log(res.data);
          setError(res.data.message);
        }
      });
    }
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  // const changeNo = (e) => {
  //   let nums = e.target.value;
  //   if (nums.length > 0) {
  //     if (nums.length % 4 == 0) {
  //       nums += ' ';
  //     }
  //   }
  //   setCardNo(nums);
  // };
  return (
    <div className="bg-pays w-100 h-100">
      <NewNav />
      <div className="row p-lg-5 p-2 container">
        <div className="col-12 col-lg-4">
          <img src={cards} alt="Card" width={'300px'} className="mt-1 mt-lg-5 ms-4" />
        </div>
        <div className="col-12 col-lg-6 ms-1" style={{ marginLeft: '100px', marginTop: '-20px' }}>
          {error ? <div className="alert alert-danger text-danger">{error}</div> : null}
          <p className="fw-bold mb-0" style={{ color: 'rgb(210,105,30)', fontSize: '30px' }}>
            Your donation will save the Massai!
          </p>
          <p className="fonts mb-5">Enter your payment info below</p>
          <label className="fonts text-blue">Email Address</label>
          <input
            type="text"
            disabled
            value={email}
            className="form-control w-50 border-0 mb-3 check-weight py-2 text-muted"
          />
          <label className="fonts text-blue">Amount</label>
          <input
            type="text"
            placeholder={'Enter Amount'}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control w-50 mb-3 border-0 check-weight py-2"
          />
          <label className="fonts text-blue">Currency</label>
          <br />
          <select
            className="text-danger checks months fw-light p-2 mb-3 rounded"
            onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="KES">KES</option>
            <option value="GBP">GBP</option>
          </select>
          <br />
          <label className="fonts text-blue">Country</label>
          <br />
          <select className="text-danger checks months fw-light p-2 rounded">
            <option>US</option>
            <option>Kenya</option>
            <option>Great Britain</option>
          </select>
          <br />
          {/* <br /> */}
          {/* <div>
            <p className="mb-0 text-ash mt-5">Donate with: </p>
            <div
              className="rounds-start rounds-end bg-white shadow"
              style={{ width: 'fit-content' }}>
              <span className="border-end px-5">
                <img src={card} alt="Credit card" width={'50px'} />
              </span>
              <span className="px-5">
                <img src={circle} alt="Credit card" width={'60px'} />
              </span>
            </div>
          </div> */}
          <button
            className="btn btn-color w-25 mt-5 shadow"
            style={{ marginLeft: '50px' }}
            onClick={pay}>
            {isloading ? <span className="spinner-border"></span> : `Donate with Card`}
          </button>
          <img src={card} alt="Credit card" width={'60px'} style={{ marginTop: '35px' }} />
          <br />
          <hr style={{ width: '120px', marginLeft: '50px' }} />
          <button className="btn btn-color w-25  shadow" style={{ marginLeft: '50px' }}>
            {isLoadingCrypto ? <span className="spinner-border"></span> : `Donate with Crypto`}
          </button>{' '}
          <img src={circle} alt="Circle" width={'70px'} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
