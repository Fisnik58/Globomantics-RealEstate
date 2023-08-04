import React from "react";
import House from "./House";

const HouseRow= ({house ,selectHouse}) =>{
    return(

        <tr target="_blank" onClick={()=> {selectHouse(House)}} >
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{house.price}</td>
        </tr>

    );
};

const HouseRowMem =React.memo(HouseRow)



export default HouseRow;

export {HouseRowMem}