import React from 'react';
import axios from 'axios';

export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const CHANGE_SELECTION = "CHANGE_SELECTION";


export function Button (props){
    return(
        <div className='nav-button' onClick={() => (dispatch) => {  
            axios.get('https://botw-compendium.herokuapp.com/api/v2')
                .then( res => console.log(res))
                .catch( err => dispatch({type: ERROR, payload: {err}}))
        }}>
            {props.item}
        </div>
    )
}

export default Button;