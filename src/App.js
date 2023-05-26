import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incNum = () => {
    setCount(count + 1);
  };
  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <div className="main_div">
        <h1>{count}</h1>

        <div className="btn_div">
          <button onClick={incNum}>Increase</button>
          <button onClick={decNum}>Decrease</button>
        </div>
      </div>
    </>
  );
}

export default App;
