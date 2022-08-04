import React from 'react'

const MainAccount = () => {
  return (
    <div className='col-12 col-lg-6 rounded me-5 my-2'>
        <div className='card border-0 p-3'>
            <div className='card-body d-flex'>
                <div className='me-5'>
                    <p className='text-secondary' style={{"fontSize": "15px"}}>Main Account</p>
                    <p className='fw-bold' style={{"lineHeight": "1px"}}>NevBank Savings Account</p>
                    <p className='text-secondary' style={{"fontSize": "15px"}}>88 1240 7793 7644 3667 0002 9448</p>
                    <br />
                    <div className=''>
                        <button className='text-white btn colors me-3' style={{"fontSize": "15px"}}>Transfer Money</button>
                        <button className='btn btn-light' style={{"fontSize": "15px"}}>Link Accounts</button>
                    </div>
                </div>
                <div>
                    <p className='text-secondary' style={{"fontSize": "15px"}}>Available funds</p> 
                    <p className='fs-3'>68.789,56 <span className='text-secondary'>$</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainAccount;