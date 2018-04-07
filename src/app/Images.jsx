import React from 'react'
import { connect } from 'react-redux'

import setTestReducer from './redux/actions/setTestReducer'

import ImageWrapper from './ImageWrapper.jsx'

import cat from 'images/cat.jpg'
import dog from 'images/dog.jpg'
import dogAndCat from 'images/dogAndCat.jpg'

const Images = props => <div className='container'>
  <p>{JSON.stringify(props)}</p>
  <div>
    <button
      onClick={() => props.setTestReducer('111')}
      type='button'>
      Set Test Reducer to 111
    </button>
  </div>
  <ImageWrapper src={cat} />
  <ImageWrapper src={dog} />
  <ImageWrapper src={dogAndCat} />
</div>

export default connect(state => ({testProp: state.testReducer}), { setTestReducer })(Images)
