import React from 'react';
import Modal from '../Components/Modal';

const CardDetails = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <Modal />
    </div>
  );
};

export default CardDetails;
