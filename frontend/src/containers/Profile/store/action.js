import * as actionTypes from '../../../constants/action-types';

export const saveBasicDetails = (payload) => {
    return { type: actionTypes.SAVE_BASIC_DETAILS, payload}
};

export const saveAboutMeInfo = (payload) => {
    return { type: actionTypes.SAVE_ABOUTME_INFO, payload}
};
export const changeMode = (payload) => {
    return { type: actionTypes.CHANGE_MODE, payload }
};

export const enableSave = (payload) => {
    return { type: actionTypes.ENABLE_SAVE, payload }
};

export const saveProfilePic = (payload) => {
    return { type: actionTypes.SAVE_PROFILE_PIC, payload }
};
export const changeAboutMeMode = (payload) => {
    return { type: actionTypes.CHANGE_ABOUTME_MODE, payload }
};
export const changeBasicDetailMode = (payload) => {
    return { type: actionTypes.CHANGE_BASICDETAIL_MODE, payload }
};