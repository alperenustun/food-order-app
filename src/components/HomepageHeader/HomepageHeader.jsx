import React from 'react';
import "./HomepageHeader.scss";
import moment from 'moment';

function HomepageHeader({ userName }) {
    const today = moment().format('MMMM Do YYYY');
    ;

    return (
        <div className="homepage-header">
            <div className="homepage-header-content">
                <h1 className="homepage-header-title">{userName}</h1>
                <p className="homepage-header-date">{today}</p>
            </div>
            <div className='homepage-header-box-search'>
                <button className="homepage-header-button"><img className='homepage-header-button-img' src="src/assets/Homepage-Search.svg" /></button>
                <input type="text" placeholder="Search for food, coffe, etc.." className="homepage-header-search" />
            </div>
        </div>
    );
}

export default HomepageHeader;