import React from 'react';
import logo from '../assets/logo.png';
import lock from '../assets/lock.png';
import pci from '../assets/pci.png';
import visa from '../assets/visa.png';
import mastecad from '../assets/MasterCard.png';
import mpesa from '../assets/mpesa.png';
import intasend from '../assets/intasend.png';
import mara from '../assets/mara.png';

const Success = () => {
  return (
    <div className="bg-pays w-100 h-100">
      <div className="row mx-auto">
        <div className="col-12 row">
          <div className="col-12 col-lg-6 full-height">
            <p className="pt-4 text-white h2 col-10 container">
              <p style={{ marginBottom: '130px' }}>
                <img
                  src={logo}
                  alt={"sopa-ereto's logo"}
                  className="rounds-start rounds-end"
                  width="40px"
                />{' '}
                <span className="text-muted" style={{ fontSize: '15', fontWeight: '500' }}>
                  <span className="text-blue">Sopa-</span>
                  <span className="text-danger">Ereto</span>
                </span>
              </p>
              <p className="fw-light text-dark" style={{ fontSize: '40px' }}>
                Safe payout
              </p>
              <p className="text-muted mt-3 fw-light col-10" style={{ marginBottom: '130px' }}>
                Sopa-Ereto is a secured and transparent way to donate money
              </p>
              <p className="mt-4">
                <span
                  style={{ fontSize: '8px', marginLeft: '340px' }}
                  className="text-dark fw-light">
                  POWERED BY:{' '}
                </span>{' '}
                <img src={mara} alt="mara logo" width="70px" />
              </p>
              <div className="rounds-start rounds-end payment-border">
                <p className="p-3 m-0">
                  {' '}
                  <span className="bg-pays me-4 rounded-circle p-2">
                    <img src={lock} alt={'lock image'} width="14px" style={{ marginTop: '-4px' }} />
                  </span>
                  <span className="text-dark" style={{ marginLeft: '-15px' }}>
                    Safe payout
                  </span>
                  <span className="text-dark fw-light" style={{ marginLeft: '190px' }}>
                    Secured by:{' '}
                  </span>
                  <img src={intasend} alt="intasend logo" width="80px" className="ms-1" />
                </p>
                <p style={{ borderTop: '1px solid rgb(176, 176, 176)' }}></p>
                <div className="m-0">
                  <img
                    src={pci}
                    alt={'PCI logo'}
                    width="70px"
                    style={{ marginRight: '35px', marginLeft: '35px' }}
                  />
                  <img src={visa} alt={'Visa logo'} width="70px" style={{ marginRight: '40px' }} />
                  <img
                    src={mastecad}
                    alt={'Mastecard logo'}
                    width="60px"
                    style={{ marginRight: '40px' }}
                  />
                  <img
                    src={mpesa}
                    alt={'Mpesa logo'}
                    width="70px"
                    style={{ marginRight: '40px' }}
                  />
                </div>
              </div>
            </p>
          </div>
          <div className="new-color p-3 col-12 col-lg-6">
            <div className="h-48 px-4 py-4 pt-5 mt-5 ">
              <div className="celebrate-bg h-48 flex flex-col justify-center text-center">
                <div className="flex flex-row justify-center">
                  <img
                    src="https://intasend-staging-static.s3.amazonaws.com/img/payscreens/success.svg"
                    className="w-32"
                    alt="pay-success-icon"
                  />
                </div>
                <h1 className="text-2xl text-white">Donation Recieved</h1>
                <p
                  className="text-light text-sm mt-3 col-7"
                  style={{ textAlign: 'left', marginLeft: '158px' }}>
                  Thank you for donating. We&rsquo;ve also notified the beneficiaries about your
                  donation.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="success-bg col-12 col-lg-6">
          </div> */}
        </div>
      </div>
    </div>
    // <div className="colorss h-100" style={{ paddingTop: '80px' }}>
    //   {/* <NewNav /> */}
    //   <div className="text-center">
    //     <img sc={success} alt={'image'} width="300px" />
    //     <div
    //       className="bg-white p-4 rounds-start rounds-end"
    //       style={{ width: 'fit-content', marginLeft: '400px' }}>
    //       <img src={success2} className="bg-image" width={'400px'} />
    //       <p className="text-muted fw-bold fs-3" style={{ marginTop: '-50px' }}>
    //         Donation sent
    //       </p>
    //       <p className="text-muted">
    //         You&rsquo;ll recieve an Nft badge as an expression of our gratitude for this donation
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Success;
