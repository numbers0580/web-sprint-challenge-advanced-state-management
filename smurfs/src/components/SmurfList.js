import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/smurfActions';

const SmurfList = props => {
    useEffect(() => {
        //setTimeout(() => {props.fetchSmurfs();}, 500);
        props.fetchSmurfs();
    }, []);

    const listStyle = () => {
        return {
            listContainer: {
                width: '48%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            cardDiv: {
                width: '300px',
                background: 'white',
                padding: '10px',
                borderRadius: '20px',
                margin: '10px 0'
            }
        };
    };

    console.log('About to create Smurf List. Current List:', props.smurfs);

    return (
        <div style={listStyle().listContainer}>
            {props.smurfs.map(theSmurf => {
                return (
                    <div>
                        <div style={listStyle().cardDiv}>
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