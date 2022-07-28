import React from 'react'
import {useState} from 'react'
import imnh from "../assests/6333050.jpg"
import Alert from './Alert';

const Registeration = () => {
    const[name,setName]=useState('');
    const[userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [con_password,setCon_password]=useState('');
    const [alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      },3000);
    }
    
    async function registerUser(e) {
      e.preventDefault();
      const response=await fetch("http://localhost:9989/api/register",{
      headers:{
        'Content-Type':'application/json',
      },  
      body: JSON.stringify({
          name,
          userName,
          email,
          password,
          con_password
        }),
      method:"POST"
      })
      const data=await response.json();
      if(data.status==="ok"){
        showAlert("Registration Successful","success");
        window.location.href="/home "
      }
      else{
        showAlert(data.error,"danger");
      }
      console.log(data)
      console.log(alert)
  
    }
  

  return (
    <div>

    <section style={{height:"10rem"}}>
<Alert alert={alert}/>
    <div className="container-fluid">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-lg-12 col-xl-11" >
        <div className="card text-light bg-black">
          <div className="card-body" >
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={registerUser}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control"  value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1cd" className="form-control"  value={userName} placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1c">User Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" value={email}   placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control"  value={password} placeholder="PassWord" onChange={(e)=>setPassword(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" value={con_password} placeholder="Confirm PassWord" onChange={(e)=>setCon_password(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg bt">Register</button>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <label htmlFor="form2Example3">
                      Do You Already Registered?? <a href="/login"
                    className='text-success ms-2'  style={{color: "#393f81"}}>Sign In</a>
                    </label>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={imnh}
                  className="img-fluid" alt="..." style={{borderRadius: "10px"}}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Registeration