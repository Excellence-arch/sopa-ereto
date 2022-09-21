import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import HomeNav from '../Layouts/HomeNav';
import map from '../assets/africa.png';
import wallet from '../assets/wallet.png';
import padlock from '../assets/padlock.png';
import visibility from '../assets/visibility.png';
import { Link } from 'react-router-dom';

const NewHome = () => {
  return (
    <div className="africa">
      <div className="glassmorphisms">
        <HomeNav />
        {/* <div className="landing">
        <p className="fw-bold text-center pt-4">
          <span className="text-blue fs-1">SOPA-</span>
          <span className="text-danger fs-1">ERETO</span>
        </p>
      </div> */}
        <div className="container d-flex flex-lg-row flex-sm-column flex-column-reverse">
          <div className="pt-5 mt-5">
            <p
              className="animate__animated animate__backInDown animate__delay-1s col-lg-7 text-danger col-12 mb-4"
              style={{ fontSize: '50px', lineHeight: '50px', fontFamily: 'Aref Ruqaa Ink, serif' }}>
              Building a place where Africans coexist with wildlife
            </p>
            <p className="animate__animated animate__backInUp animate__delay-1s col-lg-6 col-12">
              Together, we can improve the livelihood of Africans by donating to the cause of
              wildlife conservation.
            </p>
            <div>
              <Link className="btn new-color text-white" to="/donor/payment">
                Donate Now
              </Link>
              <button className="btn btn-outline-dark mx-2">
                Discover <FaArrowDown />
              </button>
            </div>
          </div>
          <div>
            <img src={map} alt="African Map" className="img-width" />
            {/* <p className="float-end">
              <span className="fs-2">288</span> <span>children die everyday in africa</span>
            </p> */}
          </div>
        </div>
        <div className="container d-flex flex-row flex-wrap ">
          <div className="col-lg-3 mx-3 col-5">
            <p>
              <img src={visibility} alt="Transparency" width={'20px'} />
            </p>
            <p className="text-blue fw-bold mb-0"> Transparency</p>
            <p>
              No need to feel insecure about how your funds are being used. Get visibility into how
              your donations are distributed.
            </p>
          </div>
          <div className="col-lg-3 col-5 mx-4">
            <p>
              <img src={padlock} alt="Security" width={'20px'} />
            </p>
            <p className="text-dark fw-bold mb-0 text-blue">Security</p>
            <p>
              Your donations are securely disbursed to intended beneficiaries. No breach in records
              that hold all beneficiaries.
            </p>
          </div>
          <div className="col-lg-3 col-5 mx-4">
            <img src={wallet} alt="Payment" width={'20px'} className="mb-3" />
            <p className="text-dark fw-bold mb-0 text-blue">Diverse Payment Methods</p>
            <p>
              You don&rsquo;t have to be limited by a payment method. Your donations can come in
              your local currencies or cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
