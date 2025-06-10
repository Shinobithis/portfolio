import React from 'react'

function Photo() {
  return (
    <div className="w-75 h-75 rounded-full overflow-hidden border-4 border-white shadow-xl">
      <img
        className="w-full h-full object-cover"
        src="./photo.jpg"
        alt="photo"
      />
    </div>
  )
}

export default Photo
