import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import card from '../assets/another card.gif';
import cards from '../assets/card.gif';

const Payment = () => {
  const [dates, setDates] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [cvv, setCvv] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const url = `${useSelector((state) => state.urlReducer.baseUrl)}payment`;
  useEffect(() => {
    let date = new Date();
    setDates(date.getFullYear());
  }, []);

  const pay = () => {
    if (cardNo == '' || selectedDate == '' || selectedMonth == '') {
      setError('All inputs are required');
    } else {
      axios.post(url, { cardNo, selectedDate, cvv }).then((res) => {
        if (res.data.status == false) setError(res.data.message);
        else {
          navigate('/users');
        }
      });
    }
  };

  const changeNo = (e) => {
    let nums = e.target.value;
    if (nums.length > 0) {
      if (nums.length % 4 == 0) {
        nums += ' ';
      }
    }
    setCardNo(nums);
  };
  return (
    <div>
      <div className="row m-5 container">
        <div className="col-12 col-lg-4">
          <img src={cards} alt="Card" width={'300px'} className="mt-1 mt-lg-5" />
        </div>
        <div className="col-12 col-lg-8">
          {error ? <div className="alert alert-danger text-danger">{error}</div> : null}
          <p className="text-blue h5">Last Step!</p>
          <p className="text-blue">Enter your payment info below</p>
          <img src={card} width="150px" alt="Credit Card" /> <br />
          <label className="text-blue">Card Number</label>
          <input
            type={'text'}
            placeholder="123 4567 8912 3456"
            className="w-75 form-control fw-bold fs-5"
            value={cardNo}
            onChange={(e) => changeNo(e)}
          />
          <label>Exipration Date</label>
          <div className="d-flex flex-row">
            <div className="date-field me-2 my-2">
              <div className="month">
                <select
                  name="Month"
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
            </div>
            <div className="year m-2">
              <select
                name="Year"
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
          </div>
          <div className="my-2">
            <input
              type={'text'}
              maxLength={3}
              placeholder="CVV"
              className="w-50 form-control fw-bold fs-5"
              onInput={() => {
                if (cvv.length > this.maxLength) setCvv(cvv.slice(0, this.maxLength));
              }}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <button className="btn btn-color w-50 mt-3" onClick={pay}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
