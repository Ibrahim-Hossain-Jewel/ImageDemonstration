import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ( {title, imageUrl, size} ) => (
    <div className = {`${size} menu-item`} >
    
        <div className = "background-image" style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }/>
        <div className = "content">
            <h2>{title.toUpperCase()}</h2>
            <span>Shop Now</span>
        </div>
    </div>
);