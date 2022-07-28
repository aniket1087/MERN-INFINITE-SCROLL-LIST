import React from 'react'

const Card = (props) => {
  return (
    <div className="card mb-3 m-2 cl">
      <div className={props.gender}>
  <div className="row g-0" style={{height:"100%"}}>
    <div className="col-md-4">
    <img src={props.image} className="card-img-top imh" alt={props.image}  />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Gender: {props.gender}</p>
        <p className="card-text">Age: {props.age}</p>
        <p className="card-text">Phone: {props.phone}</p>
        <p className="card-text">Email: {props.email}</p>
        <p className="card-text"><small className="text-muted">{props.reg}</small></p>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Card