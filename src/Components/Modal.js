import React from 'react';

// eslint-disable-next-line react/prop-types
const Modal = ({ pay, cardNo, setCardNo, cvv, setCvv, expDate, setExpDate }) => {
  return (
    // <div>
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Enter your Card details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="row">
              <div>
                <label className="text-blue">Card Number</label>
                <input
                  type={'text'}
                  value={cardNo}
                  onChange={(e) => setCardNo(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="text-blue">CVV</label>
                <input
                  type={'text'}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="text-blue">Expiry Date</label>
                <input
                  type={'text'}
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                  className="form-control"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={pay}>
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Modal;
