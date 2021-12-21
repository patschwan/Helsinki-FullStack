// { useState } from "react" ist der Hook
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // EventHandler als separate Funktionen (besser)
  const increaseOne = () => setCounter(counter + 1);
  const decreaseOne = () => setCounter(counter - 1);
  const setZero = () => setCounter(0);

  return (
    // REMINDER: die EventHandler der Button ändern jeweils den State der Componennt und triggern das Re-Render
    <div>
      <Display counter={counter} />
      <Button onClick={increaseOne} text="plus" />
      <Button onClick={decreaseOne} text="minus" />
      <Button onClick={setZero} text="reset" />
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;
