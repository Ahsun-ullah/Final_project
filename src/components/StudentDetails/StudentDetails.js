import React from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import git from '../../Assets/git.png'

const StudentDetails = () => {
  return (
    <div>
      <div className="flex justify-center m-8">
        <div className="border-black border-2 w-[300px] text-black py-3 px-5 rounded-md ">
          <div>
            <img src={git} alt="pic" />
          </div>
          <div>
            <div className="my-4">
              <p>
                <small>Price: ${}</small>
              </p>
              <p>
                <small>Shipping: ${}</small>
              </p>
              <p>
                <small>Quantity: {}</small>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="h-6 w-[200px] hover:bg-green-600 bg-blue-400 rounded-full ">
                <span className="pr-2 text-black font-semibold">Delete</span>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
