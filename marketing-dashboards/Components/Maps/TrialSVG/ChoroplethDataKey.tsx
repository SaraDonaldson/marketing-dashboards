'use client'
import React from 'react'
import { useState } from "react";


function ChoroplethDataKey({dataCategoryPoints}) {
    

  return (
    <div className='h-12 grid grid-flow-row grid-cols-4 w-1/2'>

        <div className={`${dataCategoryPoints[1][0]} h-4 rounded-l-md`}></div>
        <div className={`${dataCategoryPoints[1][1]} h-4`}></div>
        <div className={`${dataCategoryPoints[1][2]} h-4`}></div>
        <div className={`${dataCategoryPoints[1][3]} h-4 rounded-r-md`}></div>

        <div className={`h-6`}>{dataCategoryPoints[0][0]}</div>
        <div className={`h-6`}>{dataCategoryPoints[0][1]}</div>
        <div className={`h-6`}>{dataCategoryPoints[0][2]}</div>
        <div className={`h-6`}>{dataCategoryPoints[0][3]}</div>
  
  </div>
  )
}

export default ChoroplethDataKey;