import './App.css';
import Header from './Header'
import Feature from './Feature'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Return from './Return'
import HouseQuery from './HouseQuery';

function App(params) {
    let [allhouses, setAllHouses] = useState([]);

    useEffect(()=>{

        fetch('/houses.json')
        .then((data) => data.json())
        .then((json) => {
            setAllHouses(json);
            console.log(allhouses);
        })
    }, [])

    return <>
    <BrowserRouter>
    <Header allhouses={allhouses}/>
       <Routes>
           <Route path='/' element={ <Feature allhouses={allhouses}/>}/>
           <Route path='/Return/:country' element={<Return allhouses={allhouses}/>}/>
           <Route path='/HouseQuery/:id' element={<HouseQuery allhouses={allhouses}/>}/>
            
           
       </Routes>
    </BrowserRouter>
    </>
    
    
}



export default App ; 