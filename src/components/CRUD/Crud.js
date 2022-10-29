import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import StudentDetails from '../Students details/StudentDetails'

const Activity = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <div className="container bg-stone-200">
          <h2 className="text-black text-center text-4xl py-3">
            This is Crud Operation
          </h2>
        </div>
        <StudentDetails></StudentDetails>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Activity
