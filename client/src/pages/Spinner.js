import React from 'react'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center m-3 fixed-top'>
     <div className="spinner-border me-3 text-light" role="status">
      <span className="visually-hidden"></span>
    </div>
    <span className='text-light'>Loding FeedBack....</span>
    </div>
  )
}

export default Spinner