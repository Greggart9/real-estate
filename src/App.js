import './App.css';
import Header from './Header'
import Feature from './Feature'
import { useEffect, useState } from 'react';

function App(params) {
    let [allhouses, setAllHouses] = useState([]);

    useEffect(()=>{

    fetch('/house.json')
    .then((data) => data.json())
    .then((json => {
        setAllHouses(json);
        console.log(allhouses);
    }))

    return <>
    <Header allhouses={allhouses}/>
    <Feature allhouses={allhouses}/>
    </>
    })
    
}



export default App ; 