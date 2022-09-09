import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import card from '../assets/card.gif';
import bitcoin from '../assets/bitcoin.gif';
import cards from '../assets/Rectangle.png';
import NewNav from '../Layouts/NewNav';

const Payment = () => {
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();
  const email = 'chinwenduiheanatu@gmail.com';
  // const [dates, setDates] = useState('');
  // const [cardNo, setCardNo] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');
  // const [selectedMonth, setSelectedMonth] = useState('');
  // const [cvv, setCvv] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const url = `${useSelector((state) => state.urlReducer.baseUrl)}payment`;
  // useEffect(() => {
  //   let date = new Date();
  //   setDates(date.getFullYear());
  // }, []);

  const pay = () => {
    if (amount == '' || currency == '') {
      setError('All inputs are required');
    } else {
      axios.post(url, { amount, currency }).then((res) => {
        if (res.data.status == false) setError(res.data.message);
        else {
          navigate('/users');
        }
      });
    }
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
    <div className="bg-p">
      <NewNav />
      <div className="row p-5 container">
        <div className="col-12 col-lg-4">
          <img src={cards} alt="Card" width={'300px'} className="mt-1 mt-lg-5 ms-4" />
        </div>
        <div className="col-12 col-lg-7 pt-5 ms-5">
          {error ? <div className="alert alert-danger text-danger">{error}</div> : null}
          <p className=" h4 fw-bold" style={{ color: 'rgb(210,105,30)' }}>
            Your donation will save the Massai!
          </p>
          <p className="text-blue fonts mb-5">Enter your payment info below</p>
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
          <input
            type="text"
            placeholder={'Enter Currency'}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="form-control w-50 border-0 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Country</label>
          <br />
          <select className="text-danger checks months fw-light p-2 rounded">
            <option>US</option>
            <option>KES</option>
            <option>GBP</option>
          </select>
          <br />
          {/* <br /> */}

          <div>
            <p className="mb-0 text-ash mt-5">Donate with: </p>
            <div
              className="rounds-start rounds-end bg-white shadow"
              style={{ width: 'fit-content' }}>
              <span className="border-end px-5">
                <img src={card} alt="Credit card" width={'50px'} />
              </span>
              <span className="px-5">
                <img src={bitcoin} alt="Credit card" width={'50px'} />
              </span>
            </div>
          </div>

          {/* {error ? <div className="alert alert-danger text-danger">{error}</div> : null}
          <p className="text-blue h4 fw-bold ms-4">Last Step!</p>
          <p className="text-blue fonts ms-4">Enter your payment info below</p>
          <div className="widths">
            <img src={card} width="190px" alt="Credit Card" className="zoom" />
          </div>
          <label className="text-blue fonts ms-4">Card Number</label>
          <input
            type={'text'}
            placeholder="123 4567 8912 3456"
            className="w-60 form-control fs-6 mt-1 mb-3 checks ms-4"
            value={cardNo}
            onChange={(e) => changeNo(e)}
          /> */}
          {/* <label className="fonts text-blue ms-4">Exipration Date</label>
          <div className="d-flex flex-row ms-4">
            <div className="date-field me-2 my-2">
              <div className="month">
                <select
                  name="Month"
                  className="checks months"
                  value={selectedMonth}
                  defaultValue="Month"
                  onChange={(e) => setSelectedMonth(e.target.value)}>
                  <option hidden disabled value="">
                    Month
                  </option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>
            </div> */}
          {/* <div className="year m-2">
              <select
                name="Year"
                className="checks months"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}>
                <option hidden value={''} disabled>
                  Year
                </option>
                <option value={dates}>{dates}</option>
                <option value={dates + 1}>{dates + 1}</option>
                <option value={dates + 2}>{dates + 2}</option>
                <option value={dates + 3}>{dates + 3}</option>
              </select>
            </div>
          </div> */}
          {/* <div className="mt-3 ms-4">
            <label className="fonts text-blue">CVV</label>
            <input
              type={'text'}
              maxLength={3}
              placeholder="123"
              className="w-25 checks form-control"
              onInput={() => {
                if (cvv.length > this.maxLength) setCvv(cvv.slice(0, this.maxLength));
              }}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            /> */}
          {/* </div> */}
          {/* amount, currency */}
          <button
            className="btn btn-color w-25 mt-5 shadow"
            style={{ marginLeft: '50px' }}
            onClick={pay}>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
