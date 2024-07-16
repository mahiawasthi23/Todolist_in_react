import React, { useState, useEffect } from 'react';


const Sidebar = ({ setCurrentCategory }) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
    };

    return (
        <aside className="sidebar">
            <button className="btn" onClick={() => handleCategoryClick('All')}>All Tasks</button>
            <button className="btn" onClick={() => handleCategoryClick('Upcoming')}>Upcoming Tasks</button>
            <button className="btn" onClick={() => handleCategoryClick('In Progress')}>In Progress</button>
            <button className="btn" onClick={() => handleCategoryClick('Completed')}>Completed Tasks</button>
            <div className="sidebar-item">
                <h3>Digital Clock</h3>
                <p className="digital-clock">{time}</p>
            </div>
        </aside>
    );
}

export default Sidebar;
