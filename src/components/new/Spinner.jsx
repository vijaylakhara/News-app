import React from 'react'
import Loading from '../img/Loading.gif'
const Spinner = () => {
  return (
    <div className='text-center' >
      <img src={Loading} alt="loading" id='loading'/>
    </div>
  )
}

export default Spinner
