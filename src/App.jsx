import "./App.css";
import LineChart from "./Components/LineChart";
// import DaisyNav from "./Components/DaisyNav";
import Navbar from "./Components/Navbar";
import Phones from "./Components/Phones";
import PricingOptions from "./Components/PricingOptions";
import StatWithBar from "./Components/StatWithBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PricingOptions></PricingOptions>
      <LineChart></LineChart>
      <StatWithBar></StatWithBar>
      <Phones></Phones>
    </>
  );
}

export default App;
