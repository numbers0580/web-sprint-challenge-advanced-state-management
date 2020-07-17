import React from 'react';
import {connect} from 'react-redux';

const SmurfCard = props => {
    const {smurfData} = props;

    return (
        <div style={{width: '300px', background: 'white', padding: '10px', borderRadius: '20px', margin: '10px 0'}}>
            <h2>{smurfData.name}</h2>
            <p>Age: {smurfData.age}</p>
            <p>Height: {smurfData.height}</p>
        </div>
    );
};

export default SmurfCard;