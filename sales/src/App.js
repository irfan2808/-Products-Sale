
import logo from './logo.svg';
import './App.css';

import { Prodocts } from "./data.js"

function App() {
  return <div>
    <h1>Products:</h1>

    <section className="id">
      <Prodocts name="Dairy Milk Roast Almond" Price="200/-"/>
      <Prodocts name="Dairy Milk Fruit And Nut" Price="250/-"/>
      <Prodocts name="Dairy Milk Oreo" Price="180/-"/>
      <Prodocts name="Dairy Milk Bubbly" Price="200/-"/>
    </section>
  </div>
}




export default App;