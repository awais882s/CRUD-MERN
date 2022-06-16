import React, { useState } from 'react';
// import Axios from 'axios'
import Axios from "axios"

export default function Food() {
  const [foodName, setFoodName] = useState("")
  const [days, setDays] = useState(0)
  const foodHandler = (e) => {
    setFoodName(e.target.value);
    // console.log(foodName);
  }
  const daysHandler = (e) => {
    setDays(e.target.value);
    // console.log(days);

  }
  const submitHandler = () => {
    Axios.post("https://localhost:3001/insert", {
      foodName: foodName,
      days: days
    })
  }


  return (
    <div className="App">
      <h1>CRUD APP IN MERN</h1>
      <label htmlFor="name">Food Name:</label>
      <input type="text" name="" id="name" placeholder="Food Name" onChange={foodHandler} />
      <label htmlFor="no">Days Since You Ate It:</label>
      <input type="number" name="" id="no" placeholder="No of Food" onChange={daysHandler} />
      <button onClick={submitHandler}>Add To List</button>
      {/* <h1>{ite}</h1> */}
    </div>
  )
}
