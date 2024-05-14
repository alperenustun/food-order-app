import React from 'react';
import "./HomepageHeader.scss";

function HomepageHeader() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="homepage-header">
            <div className="homepage-header-content">
                <h1 className="homepage-header-title">Welcome to Foodies</h1>
                <p className="homepage-header-date">{formattedDate}</p>
            </div>
            <div className='homepage-header-box-search'>
                <button className="homepage-header-button"><img className='homepage-header-button-img' src="src/assets/Homepage-Search.svg" /></button>
                <input type="text" placeholder="Search for food, coffe, etc.." className="homepage-header-search" />
            </div>
        </div>
    );
}

export default HomepageHeader;