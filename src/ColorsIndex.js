import React from 'react';
import { Link } from 'react-router-dom';
import './ColorsIndex.css';

const ColorsIndex = ({ colorList }) => {
    return (
        <div>
            <h2>Colors Index</h2>
            <ul>
                {colorList.map(color => (
                    <li key={color.name}>
                    <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/colors/new">Add New Color</Link>
        </div>
    );
};

export default ColorsIndex;
