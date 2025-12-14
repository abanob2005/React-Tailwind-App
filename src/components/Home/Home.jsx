import React from 'react'
import avatar from '../../assets/avatar.svg'
export default function Home() {
  return <>
    <section className=' bg-[#1abd9c] dark:bg-green-950'>
      <div className=' container text-black  dark:text-white mx-auto py-17 '>
        <div className="img w-1/3 mb-4 mx-auto">
          <img src={avatar} alt="Avatar Photo" className="w-full " />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-6">
            START FRAMEWORK
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-24 h-1 bg-black dark:bg-white"></span>
            <i className="fa-solid fa-star  text-xl"></i>
            <span className="block w-24 h-1 bg-black dark:bg-white"></span>
          </div>
          <p className="text-lg md:text-xl">
            Graphic Artist - Web Designer - Illustrator
          </p>

        </div>
      </div>
    </section>
  </>
}
