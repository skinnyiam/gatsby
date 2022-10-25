import React from 'react'

const Footer = () => {
  const date = new Date()
const currentDate= date.getFullYear()
  return (
    <div className='text-center'>copyright @ {`${currentDate}`}</div>
  )
}

export default Footer