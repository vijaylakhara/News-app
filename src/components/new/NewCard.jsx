import React, { useEffect, useState } from 'react'
import './newscard.css'
const NewCard = (props) => {
let {title,description,imageUrl,newUrl}=props;
  return (
    <>
     <div className="card" style={{width: "18rem"}}>
  <img src= {imageUrl} className="card-img-top" alt="..." style={{height:"10rem"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </>
  )
}

export default NewCard
