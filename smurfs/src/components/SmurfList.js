import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/smurfActions';

import SmurfCard from './SmurfCard';

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div style={{width: '48%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {props.smurfs.map(theSmurf => {
                return (
                    <SmurfCard smurfData={theSmurf}/>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);