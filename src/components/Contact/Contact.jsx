import React from 'react'

export default function Contact() {
  return <>
    <section className=' bg-[#1abd9c] dark:bg-green-950'>
      <div className=' container text-black  dark:text-white mx-auto py-17 '>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl uppercase font-bold tracking-wide mb-6">
            Contact-Section
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-24 h-1 bg-black dark:bg-white"></span>
            <i className="fa-solid fa-star  text-xl"></i>
            <span className="block w-24 h-1 bg-black dark:bg-white"></span>
          </div>
          <div className="flex flex-wrap justify-center items-center">
        
            <div className="relative mb-3 w-2/3">
              <input
                type="text"
                name="userNane"
                placeholder=" "
                className="peer w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 bg-white focus:outline-none transition-all"
              />
              <label
                htmlFor="userName"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-black peer-focus:text-sm z-10 px-1"
              >
                UserName
              </label>
            </div>
            <div className="relative mb-3 w-2/3">
              <input
                type="number"
                name="userAge"
                placeholder=" "
                className="peer w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 bg-white focus:outline-none transition-all"
              />
              <label
                htmlFor="userAge"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-black peer-focus:text-sm z-10 px-1"
              >
                UserAge
              </label>
            </div>
            <div className="relative mb-3 w-2/3">
              <input
               type='email'
                name="userEmail"
                placeholder=" "
                className="peer w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 bg-white focus:outline-none transition-all"
              />
              <label
                htmlFor="userEmail"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-black peer-focus:text-sm z-10 px-1"
              >
                UserEmail
              </label>
            </div>
            <div className="relative mb-3 w-2/3">
              <input
                type="password"
                name="userPassword"
                placeholder=" "
                className="peer w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 bg-white focus:outline-none transition-all"
              />
              <label
                htmlFor="userPassword"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-black peer-focus:text-sm z-10 px-1"
              >
                UserPassword
              </label>
            </div>
          </div>
        <button className="px-5 py-3 bg-blue-500 text-xl hover:bg-blue-950 transition duration-300 rounded-2xl hover:text-white dark:text-black ">Submit</button>
        </div>
      </div>
    </section>
  </>
}
