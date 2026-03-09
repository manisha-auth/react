import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className='card'>
        <h1>{props.name} {props.age}</h1>
        <img src={props.img} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit quisquam non corrupti dicta eum cupiditate aliquam minima fugiat! Est aspernatur doloribus neque non voluptatem hic a exercitationem ab quasi!</p>
        <button>View Profile</button>
      </div>
    </div>

  )
}

export default Card
