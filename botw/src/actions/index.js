import axios from 'axios'; 

export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const CHANGE_SELECTION = "CHANGE_SELECTION";

export const getData = () => (dispatch) => {  
    
    axios.get('https://botw-compendium.herokuapp.com/api/v2')
        .then( res => dispatch({type: SUCCESS, payload: res.data}))
        .catch( err => dispatch({type: ERROR, payload: {err}}))
}

