import { useState } from "react";
import "./App.scss";
import Text from "./components/Text.js";

function App() {
  const [count, setCount] = useState(0);
  const ClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <main>
        <div>
          <button onClick={ClickHandler}>Increment Count</button>
        </div>
        <div>
          <Text props={count} />
        </div>
      </main>
    </>
  );
}

export default App;
