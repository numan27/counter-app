import React from 'react'
import AppLayout from '../components/Layout/AppLayout'

const About = () => {

  const galleryData = [
    { title: "Color Gallery", content: "This is a Stone Box", background: "stone", colorValue: 400 },
    { title: "Color Gallery", content: "This is a Red Box", background: "red", colorValue: 600 },
    { title: "Color Gallery", content: "This is a Blue Box", background: "blue", colorValue: "200" },
    { title: "Color Gallery", content: "This is a Green Box", background: "green", colorValue: "800" },
  ]
  return (
    <AppLayout>
      <div className='w-4/6 mx-auto mt-20'>
        <h1 className='text-center text-orange-600 text-4xl font-semibold'>Colors Gallery</h1>

        <div className="galley-item grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8">

          {galleryData.map((items) => (
            <div className={`image-box xl:h-72 h-auto border bg-${items.background}-${items.colorValue} rounded-md flex flex-col items-center justify-center`}>
              <h2 className='text-3xl mb-3'>{items.title}</h2>
              <p>{items.content}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export default About