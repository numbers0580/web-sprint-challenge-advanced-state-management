import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/smurfActions';

//import SmurfCard from './SmurfCard';

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div style={{width: '48%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {props.smurfs.map(theSmurf => {
                return (
                    <div>
                        {/*<SmurfCard smurfData={theSmurf}/>*/}
                        <div style={{width: '300px', background: 'white', padding: '10px', borderRadius: '20px', margin: '10px 0'}}>
                            <h2>{theSmurf.name}</h2>
                            <p>Age: {theSmurf.age}</p>
                            <p>Height: {theSmurf.height}</p>
                        </div>
                    </div>
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