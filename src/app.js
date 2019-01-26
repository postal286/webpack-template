import React from 'react'

import ImgJpg from './image.jpg'
import ImgUrl, { ReactComponent as Img} from './image.svg'

export default () => {
  return (
    <div className={'image-wrapper'}>
      <img src={ImgJpg} className={'image'} alt="Picture" />
      <img src={ImgUrl} className={'image'} alt="Picture" />
      <Img />
    </div>
  )
}