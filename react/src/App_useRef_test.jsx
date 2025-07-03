import { useRef } from 'react';

function App() {
  const inputEl = useRef(null);
  
  const onButtonClick = () => {
    // `current` 指向已挂载的 input 元素
    inputEl.current.focus();     // .click() can replace .focus()
    const inputValue = inputEl.current.value;
    console.log("Input focused", inputValue);
  };
  
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default App;

