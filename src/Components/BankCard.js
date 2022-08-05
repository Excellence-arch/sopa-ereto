import React from 'react'
import MaterialIcon from 'react-google-material-icons';

const BankCard = ({name, no, amount, img, cents}) => {
  return (
    <div className='col-6 col-lg-3 rounded mx-2'>
        <div className='card container py-3 border-0'>
            <div className='d-flex'>
                <div className='me-5'>
                    <br />
                    <p className='fw-bold fs-6' style={{"lineHeight": "1px"}}>{name}</p>
                    <p className='text-secondary' style={{"fontSize": "14px"}}>{no}</p>
                    <p className='fs-5 fw-bold'>{amount},<span className='fs-6'>{cents}</span>&nbsp;<span className='text-secondary'>$</span></p>
                    <p className='text-secondary cursor'>
                        <MaterialIcon icon="more_vert"/>
                    </p>
                </div>
                <div className='ms-5'>
                    <img src={img} alt="image" width="50px"/>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankCard;