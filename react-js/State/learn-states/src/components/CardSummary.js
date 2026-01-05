import React from 'react'

const CardSummary = ({cart}) => {
    const total = cart.reduce(( sum,price)=>sum+price,0);
  return (
    <div><h3>Total Amount : ₹{total}</h3></div>
  )
}

export default CardSummary