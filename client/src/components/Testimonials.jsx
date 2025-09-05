import React from 'react'

const Testimonials = () => {
  return (
    <div>
  <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5">
    Customer Testimonials
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
    <div className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700">
      <p className="text-4xl text-gray-500">”</p>
      <p className="text-sm text-gray-500">
        I've been using bg.removal for nearly two years, primarily for
        Instagram, and it has been incredibly user-friendly, making my work much
        easier.
      </p>
      <div className="flex items-center gap-3 mt-5">
        <img
          className="w-9 rounded-full"
          src="/assets/profile_img_1-3hF7LVEj.png"
          alt=""
        />
        <div>
          <p>Richard Nelson</p>
          <p className="text-sm text-gray-600">Web Developer</p>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700">
      <p className="text-4xl text-gray-500">”</p>
      <p className="text-sm text-gray-500">
        I've been using bg.removal for nearly 6 months, I had a fantastic
        experience. The quality is top-notch. I recommend others to try this
        app.
      </p>
      <div className="flex items-center gap-3 mt-5">
        <img
          className="w-9 rounded-full"
          src="/assets/profile_img_2-80eyQ_oU.png"
          alt=""
        />
        <div>
          <p>Donald Jackman</p>
          <p className="text-sm text-gray-600">UI Deginer</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonials