import React from 'react'
import Image from 'react-bootstrap/Image';

import MyImages from '../images/banner-0.jpg';

export const Banner = () => {
  return (
    <div style={{ position: 'relative', minHeight: '150px', marginTop:"50px" }}>
      <Image src={MyImages} fluid style={{ minHeight: '100%', minHeight: '150px', opacity:"100%" }} alt="Banner Image" />
      <div
        style={{
          display:"flow-root",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          fontFamily: "fantasy" 
          
        }}
      >
      DECOUVREZ NOS PRODUITS
      </div>
    </div>
  );
}
