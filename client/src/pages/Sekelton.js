import React from 'react'

const Sekelton = (props) => {
  return (
    <div>
   <div className="card mb-3 m-2 c1 cl">
      <div className={`${props.name}`}>
        <div className="row g-0" style={{height:"100%"}}>
        <div className="col-md-4">
        <div className="card-1 animate-pulse c2 imh">
            </div>
        </div>
    <div className="col-md-8">
      <div className="card-body">
      <div className="c5 animate-pulse"></div> 
      <div className="c3 animate-pulse"></div> 
      <div className="c3 animate-pulse"></div> 
      <div className="c3 animate-pulse"></div> 
      <div className="c3 animate-pulse"></div> 
      <div className="c3 animate-pulse"></div> 
      </div>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Sekelton