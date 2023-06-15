import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
      <CounterApp />
      <CounterApp />

    </>
  );
}

function CounterApp() {
  let [counter, setCounter] = useState(1);

  let LikeMeAction = () => {
    counter = counter + 1;
    console.log(counter);

    setCounter(counter);
  };
  
  let [counter2, setCounter2] = useState(1);
  let DisLikeMeAction = () => {
    counter2 = counter2 + 1;
    console.log(counter2);

    setCounter2(counter2);
  };
  return (
    <>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia
        consequatur, esse repellendus omnis hic mollitia aperiam neque, enim
        aspernatur eum nobis asperiores harum, ducimus sunt ex. Ullam voluptatem
      </h5>

      <h5>
        {counter}
        <input type="button" value="&#128077;" onClick={LikeMeAction} />
        {counter2}
        <input type="button" value="&#128078;" onClick={DisLikeMeAction} />
        
      </h5>
      
    </>
  );
}

export default App;
