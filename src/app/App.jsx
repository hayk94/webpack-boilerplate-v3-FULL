import React from 'react'

import ImageWrapper from './ImageWrapper.jsx'

import cat from '../assets/images/cat.jpg'
import dog from '../assets/images/dog.jpg'
import dogAndCat from '../assets/images/dogAndCat.jpg'

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
