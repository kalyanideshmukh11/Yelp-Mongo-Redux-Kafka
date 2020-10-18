import * as actionTypes from '../../../constants/action-types';

export const saveRestaurantDetails = (payload) => {
    return { type: actionTypes.SAVE_RESTAURANT_DETAILS, payload }
};

export const changeMode = (payload) => {
    return { type: actionTypes.CHANGE_MODE, payload }
};

export const enableSave = (payload) => {
    return { type: actionTypes.ENABLE_SAVE, payload }
};
export const changeImageMode = (payload) => {
    return { type: actionTypes.CHANGE_IMAGE_MODE, payload }
};
export const saveRestaurantImages = (payload) => {
    return { type: actionTypes.SAVE_RESTAURANT_IMAGES, payload }
};

export const changeMenuMode = (payload) => {
    return { type: actionTypes.CHANGE_MENU_MODE, payload }
};
export const saveMenuDetails = (payload) => {
    return { type: actionTypes.SAVE_MENU_DETAILS, payload }
};
export const saveReviewDetails = (payload) => {
    return { type: actionTypes.SAVE_REVIEW_DETAILS, payload }
};
export const changeReviewMode = (payload) => {
    return { type: actionTypes.CHANGE_REVIEW_MODE, payload }
};





