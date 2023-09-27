import React from 'react'

const Card = ({data}) => {
    const{name,email,phone,password,pickLink} = data;
  return (
    <div>
  <h6>NAME:{name}</h6>
  <h6>EMAIL:{email}</h6>
  <h6>phone{phone}:</h6>
  <h6>password:{password}</h6>
   <img src={pickLink} alt=""></img>

    </div>
  )
}

export default Card