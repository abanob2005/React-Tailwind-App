import React from 'react'

export default function Footer() {
  return <>
<footer className="bg-white dark:bg-[#2C3E50] text-gray-900 dark:text-white">
  
  {/* Top Footer */}
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

      {/* Location */}
      <div>
        <h3 className="text-xl font-bold mb-4 uppercase">
          Location
        </h3>
        <p className="leading-relaxed">
          2215 John Daniel Drive <br />
          Clark, MO 65243
        </p>
      </div>

      {/* Social */}
      <div className="text-center">
        <h3 className="text-xl font-bold mb-6 uppercase">
          Around the Web
        </h3>

        <div className="flex justify-center gap-4">
          <a className="w-12 h-12 rounded-full border border-gray-900 dark:border-white flex items-center justify-center
                        hover:bg-gray-900 dark:hover:bg-white
                        hover:text-white dark:hover:text-[#2C3E50]
                        transition">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a className="w-12 h-12 rounded-full border border-gray-900 dark:border-white flex items-center justify-center
                        hover:bg-gray-900 dark:hover:bg-white
                        hover:text-white dark:hover:text-[#2C3E50]
                        transition">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="w-12 h-12 rounded-full border border-gray-900 dark:border-white flex items-center justify-center
                        hover:bg-gray-900 dark:hover:bg-white
                        hover:text-white dark:hover:text-[#2C3E50]
                        transition">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a className="w-12 h-12 rounded-full border border-gray-900 dark:border-white flex items-center justify-center
                        hover:bg-gray-900 dark:hover:bg-white
                        hover:text-white dark:hover:text-[#2C3E50]
                        transition">
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>

      {/* About */}
      <div>
        <h3 className="text-xl font-bold mb-4 uppercase">
          About Freelancer
        </h3>
        <p className="leading-relaxed">
          Freelance is a free to use, licensed Bootstrap theme
          created by Route.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Footer */}
  <div className="bg-gray-100 dark:bg-[#1A252F] py-4 text-center text-sm text-gray-700 dark:text-gray-300">
    Copyright © <a target='_blank' href="https://github.com/abanob2005"><span className="text-[#1ABC9C] cursor-pointer">Abanob Sameh Hanna</span></a> 2025
  </div>
</footer>
  </>
}
