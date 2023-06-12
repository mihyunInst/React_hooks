import React, { useReducer } from 'react';

// userReducer() : useState 와 비슷하지만, 복잡한 상태 로직을 다룰 때 더 효과적이며
//                  상태와 상태를 변경하는 함수를 반환하는 배열을 반환
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Exam3() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    );
}

export default Exam3;
