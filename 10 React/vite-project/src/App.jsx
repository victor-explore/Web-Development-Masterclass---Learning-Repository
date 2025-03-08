import { useState } from "react"; // Import useState hook from React
import "./App.css"; // Import CSS styles
import InputBox from "./components/InputBox"; // Import the InputBox component

function App() {
  // State variables
  const [count, setCount] = useState(0); // Basic state for demonstration purposes

  return (
    <div>
      <h1>Hello World</h1>
      <InputBox
        label="Amount"
        currencyOptions={["USD", "EUR", "GBP"]}
        amount={count}
        onAmountChange={setCount}
      />
    </div>
  );
}

export default App;
