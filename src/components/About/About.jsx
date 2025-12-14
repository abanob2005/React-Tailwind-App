
export default function About() {
  return <>
    <section className=' bg-[#1abd9c] dark:bg-green-950'>
      <div className=' container text-black  dark:text-white mx-auto py-17 '>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl uppercase font-bold tracking-wide mb-6">
            About-Section
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-24 h-1 bg-black dark:bg-white"></span>
            <i className="fa-solid fa-star  text-xl"></i>
            <span className="block w-24 h-1 bg-black dark:bg-white"></span>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <p className="text-lg max-lg:w-full mb-3 w-1/2 md:text-xl">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            <p className="text-lg max-lg:w-full mb-3 w-1/2 md:text-xl">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
}
