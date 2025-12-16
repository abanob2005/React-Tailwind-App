import React, { useState,useEffect } from 'react'
import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
export default function Portofolio() {
  let images = [
    { id: 1, src: img1, alt: "image1" },
    { id: 2, src: img2, alt: "image2" },
    { id: 3, src: img3, alt: "image3" },
    { id: 4, src: img1, alt: "image1" },
    { id: 5, src: img2, alt: "image2" },
    { id: 6, src: img3, alt: "image3" }
    
  ]
  
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
  if (!selectedItem) return;

  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      setSelectedItem(null);
    }
  };

  window.addEventListener('keydown', handleEsc);
  return () => window.removeEventListener('keydown', handleEsc);
}, [selectedItem]);

return <>
    <div className="container px-4 my-8 mx-auto">
      <h1 className="text-4xl mb-4 font-serif text-center">Portoflio-Section</h1>
      <div className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {images.map(image => {
          return <div key={image.id} onClick={() => setSelectedItem(image)  } className=' relative '>
            <div className="overlay  absolute inset-0 rounded-2xl
                bg-black opacity-0 hover:opacity-80 transition duration-300  flex justify-center items-center ">
                  <i class="fa-solid fa-plus text-5xl  text-white"></i>
          </div>
              <img src={image.src} className='w-full rounded-2xl' alt={image.alt} /> </div>
        })}
      </div>
    </div>
{selectedItem &&(  <div className=" fixed  inset-0 bg-black/70  z-50 flex justify-center items-center"
onClick={()=> setSelectedItem(null)}>
  <img onClick={(e) =>{
    e.stopPropagation()
  }} src={selectedItem.src} className=' w-2/3' alt={selectedItem.alt} />
</div>)} </>

}
