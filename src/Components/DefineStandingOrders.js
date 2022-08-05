import React from 'react'

const DefineStandingOrders = () => {
  return (
    <div className='colors col-12 col-lg-5 ms-3 rounded-lg my-2 shadow'>
        <div className='card bg-transparent border-0 p-3 text-white'>
            <div className='d-flex'>
                <div className='container'>
                    <p className='fw-bold'>Support Pledge</p>
                    <p className='card-text' style={{"fontSize": "13px"}}>We help you remember about recurring payments for the fixed price. Define once standing order and bank will take care of your regular transfers.</p>
                    <button className='btn btn-light mt-3' style={{"fontSize": "15px"}}>Support Pledge</button>
                </div>
                <div>
                    <br />
                    <img src="" alt='image' width={"100px"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DefineStandingOrders;