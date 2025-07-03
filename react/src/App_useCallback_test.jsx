import { useRef } from 'react';
import { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  // 使用 useCallback 缓存函数
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
      <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default App;

