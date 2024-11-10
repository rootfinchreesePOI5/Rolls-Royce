import React from 'react'
import {Link} from 'react-router-dom'
const Widebtn = ({text}) => {
  return (
    <div className='wide-btn'>
      <Link to={'/location'}><button className='btn'>
       {text}
      </button></Link>
    </div>
  )
}

export default Widebtn