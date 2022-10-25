import React from 'react'

const Card = ({answer,question}) => {
  return (
    <div className='mb-4'>
         <h1 className='text-black font-medium'>Q: {question}</h1>
        <h1 className='text-gray-600'>A: {answer}</h1>
       
    </div>
  )
}

export default Card