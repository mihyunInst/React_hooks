import React, { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';

// useContext()로 다크모드 관리하기

function Exam2() {
    const [theme, setTheme] = useState("light"); // 기본 light 설정

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, handleClick }}>
            <button onClick={handleClick}>
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
        </ThemeContext.Provider>
    );
}

export default Exam2;