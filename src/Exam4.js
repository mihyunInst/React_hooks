import React, { useState, useCallback } from 'react';

//useCallback() : 메모이제이션된 콜백 함수를 생성
function Exam4() {

    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <>
            Count: {count}
            <button onClick={increment}>+</button>
        </>
    );
}

export default Exam4;