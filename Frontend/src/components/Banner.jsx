import React from 'react'
import banner from "../../public/Banner.png"

function Banner() {
  return (
    <>
    <div className='container flex flex-col px-4 mx-auto max-w-screen-2x1 md:px-20 md:flex-row'>
        <div className='w-full order-2 md:order-1 mt-12 md:w-1/2 md:mt-32'>
            <div className='space-y-10'>
            <h1 className='text-4xl font-bold'>
                Hello, welcome here to learn something <span className='text-pink-500'>New Everyday!!!</span>
            </h1>
            <p className='text-xl'>
                Welcome to our Bookstore , your gateway to a world of literary wonders. Explore our curated collections of bestsellers, timeless classics, and new releases across various genres. Enjoy personalized recommendations, special offers, and a seamless shopping experience. Happy reading!
            </p>

            <label className="flex items-center gap-2 input input-bordered ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70 dark:svg">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                 <input type="text " className="grow " placeholder="Enter your email to login" />
        </label>
            </div>
            
        <button className="mt-6 btn btn-outline btn-secondary ">Login</button>
        
        </div>
        <div className='w-full md:w-1/2'>
            <img src={banner} className='w-92 h-92' alt=''/>
        </div>
    </div>
    </>
  );
}

export default Banner