import React from 'react'
import user from "../assests/user.png"


const Nav = () => {

  function back(){
      localStorage.removeItem('token')
        window.location.href='/login'
   }
  return (
    <div>

      <nav className="navbar fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">Project</a>
    <button className="navbar-toggler bt" type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <img className="img" alt='...' src={user}/>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Project</h5>
        <button type="button" className="btn-close bt" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
          <span className="navbar-brand mb-0 ">---------------</span>
          </li>
          <li className="nav-item">
          <span className="navbar-brand mb-0 ">---------------</span>
          </li>
          <li className="nav-item">
          <span className="navbar-brand mb-0">---------------</span>
          </li>
          <li className="nav-item">
          <span className="navbar-brand mb-0 ">---------------</span>
          </li>
          <li className="nav-item">
          <span className="navbar-brand mb-0 ">---------------</span>
          </li>
          <li className="nav-item">
            <span className="nav-item sl" onClick={back}>LogOut</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav