import { useState } from "react";
import HouseRow, { HouseRowMem } from "./houseRow";
import React from "react";
const housesArray = [
  {
    id: 1,
    address: "12 vallet of Kings, Geneva",
    country: "Switzerland",
    price: 90000,
    about:"This is one of the best"
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 50000,
    about:"This is one of the best houses"
  },
  // {
  //     id:2,
  //     address:"Mittlerer Thalackerweg 39",
  //     country:"Switzerland",
  //     price:60000,
  // },
  // {
  //     id:2,
  //     address:"Obere Bahnhofstrasse 62",
  //     country:"Switzerland",
  //     price:450000,
  // },
  // {
  //     id:2,
  //     address:" Via Muraccio 94",
  //     country:"Switzerland",
  //     price:175000,
  // },
];



const HouseList = ({selectHouse}) => {
  const [houses, setHouses] = useState(housesArray);


  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 2,
        address: "Mittlerer Thalackerweg 39",
        country: "Switzerland",
        price: 60000,
      },
    ]);

  };

  return (
    <>
      <div
        className="row mb-2"
        style={{ marginLeft: "32%", marginTop: "8%", color: "coral" }}
      >
        <h5
          className="themeFontColor text-center"
          style={{
            fontSize: "170%",
            fontWeight: "700",
            marginBottom: "3%",
          }}
        >
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRowMem key={h.id} house={h}  selectHouse={selectHouse}/>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;

