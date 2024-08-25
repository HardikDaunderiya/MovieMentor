import React from 'react'
import { img_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 px-4 '>
      <img alt="Movie Card" src={img_URL+ posterPath}/>
    </div>
  )
}

export default MovieCard;
