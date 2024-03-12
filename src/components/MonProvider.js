
import React, { useState } from 'react'
import { Contexttri } from './TriContext'

export const MonProvider = ({children}) => {
    const[argument, setargument ]=useState("");


    const update=(newargument)=>{
            setargument(newargument);

    }

  return (
    <Contexttri.Provider value={{argument, update}}   >
        
        {children}
        
        </Contexttri.Provider>
  )
}
