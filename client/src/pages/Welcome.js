import React from 'react'

const Welcome = () => {
  return (
    <div>
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{width:"100vw", height:"100vh"}}>
            <h1 className='text-light'>Welcome! Here</h1>
            <a className="btn btn-outline-success mt-2" href="/login" role="button">SIGN IN</a>
    
        </div>
    </div>
  )
}

export default Welcome