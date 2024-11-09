import React from 'react'


const Hero = ({ heroimages }) => {

  return (
    <section>
      <div className='hero-container'>
        <div className='hero-items'>
          <img src={heroimages.img1} alt="" />
          <h1>{heroimages.txt1}</h1>
        </div>
        <div className='hero-items'>
          <h1>{heroimages.txt2}</h1>
          <img src={heroimages.img2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero