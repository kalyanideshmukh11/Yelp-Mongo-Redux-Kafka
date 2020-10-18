import * as actionTypes from '../../../constants/action-types';

export const saveEvents = (payload) => {
    return { type: actionTypes.SAVE_EVENTS, payload}
};

export const returnEvents = (payload) => {
    return { type: actionTypes.RETURN_EVENTS, payload}
};

export const controlModal = (payload) => {
    return { type: actionTypes.CONTROL_MODAL, payload}
};

export const registerEvent = (payload) => {
    return { type: actionTypes.REGISTER_EVENT, payload }
};

export const saveregisterEvent = (payload) => {
    return { type: actionTypes.SAVE_REGISTER_EVENT, payload }
};
export const saveAttendee = (payload) => {
    return { type: actionTypes.SAVE_ATTENDEE, payload } 
    
};

