import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(5);

  // let int = setInterval(() => {
  //   setTimer(timer - 1);
  // }, 1000);

  useEffect(() => {
    let int = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [timer]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{timer}</h2>
    </div>
  );
}
