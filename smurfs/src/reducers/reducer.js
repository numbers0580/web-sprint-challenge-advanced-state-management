//imports from components
/*
    get_smurfs, update_smurfs, set_error,
    post_smurf, add_smurf,
    delete_smurf, remove_smurf,

    fetch_smurfs_start, fetch_smurfs_success, fetch_smurfs_failure, post_smurf_start, post_smurf_success, post_smurf_failure,

    fetch_data_start, fetch_data_success, fetch_data_failure, post_data_start, post_data_success, post_data_failure, delete_smurf_start, delete_smurf_success, delete_smurf_fail
*/

import {FETCH_SMURFS, FETCH_SUCCESS, FETCH_FAILED, ADD_SMURF, ADD_SUCCESS, ADD_FAILED} from '../actions/smurfActions';

const initialState = {
    smurfs: [],
    findingSmurfs: false,
    addedSmurf: {},
    errorMsg: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS:
            return {...state, findingSmurfs: true}
        case FETCH_SUCCESS:
            console.log('FETCH_SUCCESS payload:', action.payload);
            return {...state, findingSmurfs: false, smurfs: action.payload}
        case FETCH_FAILED:
            return {...state, findingSmurfs: false, errorMsg: action.payload}
        case ADD_SMURF:
            return {...state, findingSmurfs: true}
        case ADD_SUCCESS:
            console.log('ADD_SUCCESS payloed:', action.payload);
            //return {...state, findingSmurfs: false, smurfs: [...state.smurfs, action.payload]}
            return {...state, findingSmurfs: false, smurfs: action.payload}
        case ADD_FAILED:
            return {...state, findingSmurfs: false, errorMsg: action.payload}
        default:
            return state;
    };
};