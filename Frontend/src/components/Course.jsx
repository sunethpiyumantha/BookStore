import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
      <div className="mt-28 item-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you {" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur reiciendis amet unde, cum doloremque officia delectus a, facere dolor soluta aut minima quam assumenda facilis. Necessitatibus repellendus quibusdam omnis natus!
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          Back
        </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item) =>(
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course