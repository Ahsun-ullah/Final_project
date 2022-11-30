import React from 'react'
import StudentDetails from '../Students details/StudentDetails'

const Activity = () => {
  return (
    <div>
        <div className="container bg-stone-200 h-screen">
          <h2 className="text-black text-center text-4xl">
            This is Crud Operation
          </h2>
          <StudentDetails></StudentDetails>
        </div>
    </div>
  )
}

export default Activity
