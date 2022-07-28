import React from 'react'

const Alert = (props) => {
  return (
  props.alert &&<div className="top d-flex justify-content-center">
  <div className={`alert alert-${props.alert.type}`} role="alert" style={{ boxShadow: "0px 0px 5px black"}}>
  <strong>{props.alert.msg}</strong>
</div>
</div> 
  )
}

export default Alert