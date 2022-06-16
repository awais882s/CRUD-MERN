import "../src/App.css";
function App() {
  return (
    <div className="App">
      <h1>CRUD APP IN MERN</h1>
      <label htmlFor="name">Food Name:</label>
      <input type="text" name="" id="name" placeholder="Food Name" />
      <br /><br />
      <label htmlFor="no">Days Since You Ate It:</label>
      <input type="number" name="" id="no" placeholder="No of Food" /><br /><br />
      <button>Add To List</button>
    </div>
  )
}

export default App;
