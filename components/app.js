import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./House";
import React from "react";

const App = () =>{
    const[selectedHouse, setSelectedHouse]=useState();
    return(
        <>
        <Banner>
            <div>Providing Houses All Over the World</div>
        </Banner>
        {selectedHouse ? 
        (<House house={selectedHouse} />)
        :( <HouseList selectHouse={setSelectedHouse}/>)}
        </>
    )
    };

export default App;
