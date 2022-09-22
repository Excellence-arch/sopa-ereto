import React from 'react';
// import logo from '../assets/logo.png';
import lock from '../assets/lock.png';
import pci from '../assets/pci.png';
import visa from '../assets/visa.png';
import mastecad from '../assets/MasterCard.png';
import mpesa from '../assets/mpesa.png';
// import intasend from '../assets/intasend.png';
import mara from '../assets/mara.png';
import NewNav from '../Layouts/NewNav';

const Success = () => {
  return (
    <div className="bg-pays w-100 h-100">
      <NewNav />
      <div className="">
        <div className="d-flex flex-lg-row-reverse flex-column">
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
                <div className="payout-text">
                  <h1 className="text-white" style={{ textAlign: 'left' }}>
                    Donation Recieved
                  </h1>
                  <p className="text-light text-sm mt-3 col-7" style={{ textAlign: 'left' }}>
                    Thank you for donating. We&rsquo;ve also notified the beneficiaries about your
                    donation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 full-height">
            <p className="pt-4 text-white h2 col-10 container">
              <p className="fw-light text-dark" style={{ fontSize: '40px', marginTop: '130px' }}>
                Safe payout
              </p>
              <p className="text-muted mt-3 fw-light col-10" style={{ marginBottom: '130px' }}>
                Sopa-Ereto is a secured and transparent way to donate money
              </p>
              <p className="mt-3 me-1 float-end">
                <span style={{ fontSize: '8px' }} className="text-dark fw-light">
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
                  {/* <span className="text-dark fw-light" style={{ marginLeft: '190px' }}>
                    Secured by:{' '}
                  </span>
                  <img src={intasend} alt="intasend logo" width="80px" className="ms-1" /> */}
                </p>
                <p style={{ borderTop: '1px solid rgb(176, 176, 176)' }}></p>
                <div className="d-flex flex-wrap">
                  <img
                    src={pci}
                    alt={'PCI logo'}
                    width="70px"
                    className="me-4"
                    style={{ marginLeft: '65px' }}
                  />
                  <img src={visa} alt={'Visa logo'} width="70px" className="mx-4" />
                  <img
                    src={mastecad}
                    alt={'Mastecard logo'}
                    width="60px"
                    className="mx-4"
                    // style={{ marginRight: '40px' }}
                  />
                  <img
                    src={mpesa}
                    alt={'Mpesa logo'}
                    width="70px"
                    className="mx-4"
                    // style={{ marginRight: '40px' }}
                  />
                </div>
              </div>
            </p>
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
