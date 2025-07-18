import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const FocusableInput = (props) => {
  // Write your code here
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.hasOwnProperty('shouldFocus') && props.shouldFocus) inputRef.current.focus();
  }, [])

  return <input ref={inputRef} />;
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<FocusableInput shouldFocus={true} />);
setTimeout(() => console.log(document.getElementById("root").innerHTML), 300);