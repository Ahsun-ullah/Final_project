import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Student_details = () => {
  return (
    <div className="container bg-stone-200">
      <div className=" flex items-center justify-center py-4 ">
        <div className="border-black border-2 w-[300px] text-black py-3 px-5 rounded-md ">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div>
              <p>{}</p>
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
            <div className="h-8 w-40 p-1 content-center bg-slate-400 rounded-full">
              <button onClick="" className="text-center">
                <FontAwesomeIcon
                  className=""
                  icon={faTrashAlt}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student_details
