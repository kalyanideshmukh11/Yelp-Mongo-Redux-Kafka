import * as actionTypes from '../../../constants/action-types';

const initialState = {
    eventList: [],
    searchResults: [],
    openModal: false,
    success: false,
    eventattendee :[],
}
 
const eventseachReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SAVE_EVENTS:
            return {
                ...state,
                eventList: action.payload,                
            }
        case actionTypes.RETURN_EVENTS:
            return {
                ...state,
                searchResults: action.payload,                
            }
        case actionTypes.CONTROL_MODAL:
            return {
                ...state,
                openModal: action.payload,                
            }
        case actionTypes.REGISTER_EVENT:
            return {
                    ...state,
                    success: action.payload,                
                }
        case actionTypes.SAVE_ATTENDEE:
            return {
                ...state,
                eventattendee: action.payload,  
                              
            }
        default:
            return initialState;
    }
}

export default eventseachReducer;   