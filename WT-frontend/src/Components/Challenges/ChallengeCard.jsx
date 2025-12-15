import React from 'react'

const ChallengeCard = ({title, startTime}) => {
  return (
    <div className='bg-gradient-to-r from-[#5b4ea3] to-[#3f328e]  h-[280px] p-6 rounded-xl shadow-lg hover:scale-105 transition'>
        <h2 className='text-white text-xl font-semibold text-center'>{title}</h2>
        <p>{startTime}</p>
    </div>
  )
}

export default ChallengeCard