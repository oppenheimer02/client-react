import React from 'react'

function ServiceBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>

        <img src={props.image} alt='' />
      </div>
      <div className='s-b-text'> 
      <h2> {props.title} </h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet dignissimos doloribus fuga repellendus, neque harum ipsam reiciendis cupiditate quia consectetur quibusdam facere quam in quo. Fugit dolorum quam exercitationem!</p>
      </div>
    </div>
  )
}

export default ServiceBox;
