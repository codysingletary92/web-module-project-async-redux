// import things from actions
import { ERROR, SUCCESS, LOADING, CHANGE_SELECTION } from '../actions/index';

// initialize the state

const initialState = {
    isLoading: false,
    error: {},
    data: {},
    currentSelect: null,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        case CHANGE_SELECTION:
            return {
                ...state, 
                currentSelect: action.payload,
            }
    }
}

export default reducer;