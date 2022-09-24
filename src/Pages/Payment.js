import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import $ from 'jquery';
// import card from '../assets/card.png';
// import circle from '../assets/circle.png';
import cards from '../assets/Rectangle.png';
import CryptoModal from '../Components/CryptoModal';
import Modal from '../Components/Modal';
import NewNav from '../Layouts/NewNav';

const Payment = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [amount, setAmount] = useState('10');
  const [currency, setCurrency] = useState('USD');
  const [isloading, setIsloading] = useState(false);
  // const [isLoadingCrypto, setIsLoadingCrypto] = useState(false);
  const [cardNo, setCardNo] = useState();
  const [cvv, setCvv] = useState();
  const [expDate, setExpDate] = useState();
  const [keys, setKeys] = useState();
  const [newError, setNewError] = useState();
  const [error, setError] = useState(false);
  const baseUrl = `${useSelector((state) => state.urlReducer.payments)}`;
  const navigate = useNavigate();
  const userDets = useSelector((state) => state.onlineReducer);
  // const [walletAddress, setWalletAddress] = useState();

  const getKeys = () => {
    if (currency == '' || amount == '') {
      setError('All fields arre required');
    } else {
      const newUrl = `${baseUrl}/mcs3/key`;
      axios
        .get(newUrl)
        .then((res) => {
          console.log(res.data);
          setKeys(res.data);
          setShow(true);
        })
        .catch((err) => {
          setNewError(err.message);
        });
    }
  };
  const pay = () => {
    setIsloading(true);
    let month = expDate.split('-')[1];
    let year = expDate.split('-')[0];
    axios
      .post(`${baseUrl}/mcs3/createCard`, {
        id: keys.keyId,
        publicKey: keys.publicKey,
        number: cardNo.trim(),
        cvv,
        month,
        year
      })
      .then((res) => {
        setIsloading(false);
        if (res.data.data.status == 'pending') {
          navigate('/donor/success');
        }
      })
      .catch((err) => {
        setIsloading(false);
        setNewError(err.message);
      });
  };

  return (
    <div className="bg-pays height-and-width">
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
            value={userDets.email}
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
          <select className="text-danger checks months fw-light p-2 rounded mb-3">
            <option>US</option>
            <option>Kenya</option>
            <option>Great Britain</option>
          </select>
          <br />
          {/* <span> */}
          <input type={'radio'} className="radios" name="payment" checked value={'card'} />
          <span className="fonts text-muted">&nbsp;Donate with Card</span>
          {/* </span> */}
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          {/* <span> */}
          <input type={'radio'} name="payment" value={'crypto'} className="radios" />
          <span className="fonts text-muted">&nbsp;Donate with Crypto</span>
          {/* </span> */}
          <br />
          <button className="btn btn-color px-4 mt-4" onClick={getKeys}>
            Donate
          </button>
        </div>
      </div>
      <Modal
        pay={pay}
        cardNo={cardNo}
        cvv={cvv}
        expDate={expDate}
        setCvv={setCvv}
        setExpDate={setExpDate}
        isloading={isloading}
        // getYears={getYears}
        newError={newError}
        setCardNo={setCardNo}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <CryptoModal
        pay={pay}
        // walletAdress={walletAddress}
        isloading={isloading}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Payment;
