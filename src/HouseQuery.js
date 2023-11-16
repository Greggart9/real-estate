import React from 'react'
import House from  "./House";
import { useParams } from 'react-router-dom';

const HouseQuery = ({allhouses}) => {
    const {id} = useParams();
    console.log(id);
    if(allhouses.length ===0) return <div>No houses to display</div>
    const house = allhouses.find((house) => house.id === parseInt(id))
    console.log(house);
  return (
    <House house = {house}/>
  )
}

export default HouseQuery