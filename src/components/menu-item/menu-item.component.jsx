import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

//path never be space
const MenuItem = ( {title, imageUrl, size, history, linkUrl,match} ) => (
    <div className = {`${size} menu-item`} onClick = {()=> history.push(`${match.url}${linkUrl}`)} >
        <div className = "background-image" style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        } />
        <div className = "content">
            <h2>{title.toUpperCase()}</h2>
            <span>Shop Now</span>
        </div>
    </div>
);
export default withRouter(MenuItem);