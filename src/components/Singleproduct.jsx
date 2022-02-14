import React from 'react'
import '../styles.css'

const Singleproduct = ({prod}) => {
    const prod1 = prod
    console.log("prod1 is",prod1)
  return (
    <div className='products'>
        <img src={prod.image} alt={prod.title}/>
        <div className='prodDesc'>
            <span style={{fontWeight: 700}}>  {prod.title} </span>
            <span> $ {prod.price} </span>
        </div>
        <button>Add to Cart</button>
    </div>
  )
}

export default Singleproduct