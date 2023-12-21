import React from 'react'
import Image from 'react-bootstrap/Image';

import MyImages from '../images/banner-0.jpg';

export const Banner = () => {
  return (
    <Image src={MyImages} fluid style={{  minHeight:"170px" }} />
  )
}
