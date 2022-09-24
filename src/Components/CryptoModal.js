/* eslint-disable react/prop-types */

import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const CryptoModal = ({ pay, walletAdress, setWalletAddress, isloading, show, handleClose }) => {
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
                value={walletAdress}
                placeholder="1234 5678 9012 1234"
                onChange={(e) => setWalletAddress(e.target.value)}
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
export default CryptoModal;
