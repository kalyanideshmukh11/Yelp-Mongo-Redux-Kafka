import * as actionTypes from '../../../constants/action-types';

export const saveEventDetails = (payload) => {
    return { type: actionTypes.SAVE_EVENT_DETAILS, payload }
};

export const changeEventMode = (payload) => {
    return { type: actionTypes.CHANGE_EVENT_MODE, payload }
};

export const enableSave = (payload) => {
    return { type: actionTypes.ENABLE_SAVE, payload }
};

