/* eslint-disable react/prop-types */
// import React from 'react';

// const Modal = ({
//   pay,
//   cardNo,
//   cvv,
//   setCvv,
//   expDate,
//   setExpDate,
//   getYears,
//   setCardNo,
//   isloading
// }) => {
//   return (
//     // <div>
//     <div
//       className="modal fade"
//       id="exampleModal"
//       tabIndex="-1"
//       aria-labelledby="exampleModalLabel"
//       aria-hidden="true">
//       <div className="modal-dialog modal-dialog-centered rounds-start rounds-end border-0">
//         <div className="modal-content">
//           <div className="modal-header new-color">
//             <h5 className="modal-title text-white" id="exampleModalLabel">
//               Enter your Card details
//             </h5>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"></button>
//           </div>
//           <div className="modal-body">
//             <form className="row">
//               <div>
//                 <label className="text-blue">Card Number</label>
//                 <input
//                   type={'text'}
//                   value={cardNo}
//                   placeholder="1234 5678 9012 1234"
//                   onChange={(e) => setCardNo(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-6">
//                 <label className="text-blue">CVV</label>
//                 <input
//                   type={'text'}
//                   value={cvv}
//                   onChange={(e) => setCvv(e.target.value)}
//                   className="form-control"
//                 />
//               </div>
//               <div className="col-6">
//                 <label className="text-blue">Expiry Date</label>
//                 <input
//                   type={'month'}
//                   value={expDate}
//                   onChange={(e) => {
//                     getYears;
//                     setExpDate(e.target.value);
//                   }}
//                   className="form-control"
//                 />
//               </div>
//             </form>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
//               Close
//             </button>
//             <button type="button" className="btn btn-primary" onClick={pay}>
//               <span className="text-white">
//                 {isloading ? <span className="spinner-border"></span> : 'Donate'}
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Modal;

import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Modals = ({
  pay,
  cardNo,
  cvv,
  setCvv,
  expDate,
  setExpDate,
  getYears,
  setCardNo,
  isloading,
  show,
  handleClose
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Header closeButton className="new-color">
          <Modal.Title>Enter your card details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row">
            <div>
              <label className="text-blue">Card Number</label>
              <input
                type={'text'}
                value={cardNo}
                placeholder="1234 5678 9012 1234"
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
                type={'month'}
                value={expDate}
                onChange={(e) => {
                  getYears;
                  setExpDate(e.target.value);
                }}
                className="form-control"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="shadow">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <span></span>
          <Button variant="primary" onClick={pay}>
            {isloading ? <span className="spinner-border"></span> : 'Donate'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Modals;
