import React, { useState, useMemo } from 'react';

function Exam5() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const doubleCount = useMemo(() => {
    console.log('Calculating doubleCount');
    return count * 2;
  }, [count]);

  const isEven = useMemo(() => {
    console.log('Calculating isEven');
    return count % 2 === 0;
  }, [count]);

  const uppercaseText = useMemo(() => {
    console.log('Calculating uppercaseText');
    return text.toUpperCase();
  }, [text]);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      Double count: {doubleCount}
      <div>{isEven ? 'Even' : 'Odd'}</div>
      <div>{uppercaseText}</div>
    </>
  );
}

export default Exam5;