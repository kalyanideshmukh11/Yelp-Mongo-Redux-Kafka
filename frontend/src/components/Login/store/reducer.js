import * as actionTypes from '../../../constants/action-types';

const initialState = {
    email_id: null,
    password: null,
    token: null,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_EMAIL:
            return {
                ...state,
                email_id: action.payload,
                error: null
            }
        case actionTypes.ADD_PASSWORD:
            return {
                ...state,
                password: action.payload,
                error: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload,
                error: null
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return initialState;
    }
}

export default loginReducer;