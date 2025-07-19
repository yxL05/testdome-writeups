import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';

class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  const inputDOM = useRef(null);
  const usernameDOM = useRef(null);

  function clickHandler() {
    usernameDOM.current.changeValue(inputDOM.current.value);
  }
  
  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={inputDOM} />
      <Username ref={usernameDOM} />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<App />);

setTimeout(() => {
  document.querySelector("input").value = "John Doe";
  document.querySelector("button").click();

  setTimeout(() => {
    console.log(document.getElementById("root").innerHTML);
  }, 300);
}, 300);