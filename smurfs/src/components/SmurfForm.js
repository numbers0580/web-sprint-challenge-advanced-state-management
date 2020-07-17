import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/smurfActions';

const defaultForm = {
    name: '',
    height: '',
    age: 0
};

const SmurfForm = props => {
    const [inputValue, setInputs] = useState(defaultForm);

    const submitForm = formEvent => {
        formEvent.preventDefault();
        props.addSmurf(inputValue);

        setInputs(defaultForm);
    };

    const updateInput = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        setInputs({...inputValue, [name]: value});
    };

    const formStyle = () => {
        return {
            mainDiv: {
                width: '48%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            formDiv: {
                display: 'flex',
                margin: '5px 0'
            },
            btn: {
                width: '100px',
                height: '35px',
                background: '#F52C07',
                borderRadius: '16px',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold'
            }
        };
    };

    return (
        <div style={formStyle().mainDiv}>
            <h2 style={{color: 'white'}}>Welcome New Smurf</h2>
            <form onSubmit={submitForm}>
                <div style={formStyle().formDiv}>
                    <div style={{width: '60px'}}><label>Name:</label></div>
                    <div><input type='text' name='name' value={inputValue.name} onChange={updateInput} /></div>
                </div>
                <div style={formStyle().formDiv}>
                    <div style={{width: '60px'}}><label>Age:</label></div>
                    <div><input type='number' style={{width: '60px'}} name='age' value={inputValue.age} onChange={updateInput} /></div>
                </div>
                <div style={formStyle().formDiv}>
                    <div style={{width: '60px'}}><label>Height:</label></div>
                    <div><input type='text' name='height' value={inputValue.height} onChange={updateInput} /></div>
                </div>
                <div style={{margin: '5px 0'}}>
                    <button style={formStyle().btn}>Smurf!</button>
                </div>
            </form>
        </div>
    );
};

export default connect(null, {addSmurf})(SmurfForm);