import React, { useState, useEffect } from 'react';

// useEffect()
// 컴포넌트가 등장할 때, 컴포넌트가 업데이트가 되고 나서 항상 실행 (2번)
function Exam1() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component has been updated');
    });
    // ,[] 라는 초기값을 넣어주면 초기 1번만 실행된다.

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Exam1;