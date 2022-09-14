/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const LatestTransactions = () => {
  const data = useSelector((state) => state.latestReducer.transactions);
  return (
    <div className="size border rounds-start rounds-end p-3 bg-white ms-4">
      <div className="">
        <p className="my-2 mb-4">
          <span className="position-relative mt-2">Land Owners</span>
          <p className="" style={{ marginLeft: '490px', marginTop: '-25px' }}>
            <button className="btn btn-light text-danger">{'<'}</button>{' '}
            <span className="btn btn-light">1</span>{' '}
            <button className="btn btn-light text-danger">{'>'}</button>
          </p>
        </p>
        <div className="">
          {data.map((val, i) => (
            <div key={i}>
              <td className="fw-bold pe-3">{val.day}</td>
              <p
                className="me-5 fw-light text-muted"
                style={{ height: '40px', marginTop: '-17px', marginLeft: '50px' }}>
                <span>{val.acc_no}</span>
                {/* <img src={val.acc_no} alt={'Picture'} width="40px" className="rounded-circle" /> */}
              </p>
              {/* <p className=""></p> */}
              <span
                className="text-muted fw-light"
                style={{ marginTop: '-52px', position: 'absolute', marginLeft: '140px' }}>
                <span className="text-blue">{val.phone_no}</span>
              </span>
              <span
                className="fw-light text-muted"
                style={{ position: 'absolute', marginTop: '-52px', marginLeft: '250px' }}>
                {val.name}
              </span>
              <span
                className="p-2"
                style={{
                  marginTop: '-52px',
                  position: 'absolute',
                  fontWeight: '200',
                  marginLeft: '500px',
                  color: 'black',
                  backgroundColor: '#f5f5f5'
                }}>
                {val.amount} KES
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
