import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';


export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS})
    axios.get('http://localhost:3333/smurfs')
        .then(fetched => {
            console.log('Successfully fetched smurf from localhost API', fetched.data);
            dispatch({type: FETCH_SUCCESS, payload: fetched.data});
        })
        .catch(fetchError => {
            console.log('Error getting smurf from localhost API (Console Log)');
            dispatch({type: FETCH_FAILED, payload: 'Error getting smurf from localhost API'});
        })
};

export const addSmurf = newSmurf => dispatch => {
    dispatch({type: ADD_SMURF})
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(posted => {
            console.log('Successfully added smurf to localhost API', posted.data);
            dispatch({type: ADD_SUCCESS, payload: posted.data});
        })
        .catch(postError => {
            console.log('Error trying to add smurf to localhost API (Console Log)');
            dispatch({type: ADD_FAILED, payload: 'Error trying to add smurf to localhost API'});
        })
};
