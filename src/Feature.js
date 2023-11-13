import React, { useState } from 'react'
import './Feature.css';
import  "./House";
import House from './House';
import { useMemo } from 'react';

const Feature = ({allhouses}) => {
  let feature = useMemo(() => {
    if(allhouses.length){

     const randNum = Math.floor(Math.random() * (allhouses.length))
      return allhouses[randNum]
    }
    return {}

  }, [allhouses]);

  // let feature = {}  
  // if (allhouses.length){
  //   const randNum = Math.floor(Math.random() * (allhouses.length - 1), [allhouses])

  //   feature = allhouses[randNum]
  // }


    

  return (
    <>
    <div className='feature_house'>
        <h2> Featured house</h2>
    </div>

    <House house ={feature}/>

    </>
  )
}


export default Feature