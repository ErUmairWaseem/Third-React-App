import { useState } from "react";

function App() {
  return (
    <>
      <h1>My Counter App</h1>
      < CounterApp />
    </>
  );
}

function CounterApp() {

  let [counter, setCounter] = useState(1);

  let likeMeAction = () => {
    counter = counter + 1;
    //alert();
    console.log("I am Button click", counter);

    setCounter(counter);
  };

  return (
    <>
       <h1>{counter}</h1>
      <input type="button" value="Like Me"
      onClick={likeMeAction} />
    </>
  );
}
export default App;
