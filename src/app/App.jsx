import React from 'react'

import ImageWrapper from './ImageWrapper.jsx'

import cat from 'images/cat.jpg'
import dog from 'images/dog.jpg'
import dogAndCat from 'images/dogAndCat.jpg'

const App = (props) => {
  return (
    <div className='container'>
      <ImageWrapper src={cat} />
      <ImageWrapper src={dog} />
      <ImageWrapper src={dogAndCat} />
    </div>
  )
}

export default App
