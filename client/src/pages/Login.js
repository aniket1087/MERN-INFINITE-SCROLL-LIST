import React from 'react'
import {useState} from 'react'
import imnh from "../assests/draw2.svg"
import Alert from './Alert';

const Login = () => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      },2000);
    }
    
    
    async function loginUser(e) {
      e.preventDefault();
      const response=await fetch("http://localhost:9989/api/login",{
      headers:{
        'Content-Type':'application/json',
      },  
      body: JSON.stringify({
          userName,
          password
        }),
      method:"POST"
      })
      const data=await response.json();
      if(data.user){
        localStorage.setItem('token',data.user)
        showAlert("Registration Successful","success");
        window.location.href="/home "
      }
      else{
        showAlert("Please Check! some issuse occured","danger")
      }
      console.log(data.user)
  
    }
  
  return (
    <div>
    <Alert alert={alert}/>
    <h1 className='text-center text-light mt-2'>Login Form</h1>
<section className="vw-100 ">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src={imnh} className="img-fluid" alt="..."/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={loginUser}>
          <div className="form-outline mb-4">
            <input type="text" id="form1Example13" className="form-control form-control-lg" placeholder="User Name" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <label className="form-label text-light" htmlFor="form1Example13">User Name</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label className="form-label text-light" htmlFor="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label text-light" htmlFor="form1Example3"> Remember me </label>
            </div>
            <a href="#!" className='text-danger nav-link'>Forgot password?</a>
          </div>
            <p className="pb-lg-2 text-light" style={{color: "#393f81"}}>Don't have an account? <a href="/register"
                    className='text-success ms-2'  style={{color: "#393f81"}}>Register here</a></p>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg btn-block bt">Sign in</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Login