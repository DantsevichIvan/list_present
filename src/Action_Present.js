export const GET_PRESENT = 'RECENTCOMMENTS::GET_PRESENT';
export const CHANG_PICTURE = 'RECENTCOMMENTS::CHANG_PICTURE'

export const PresentGetAC = (data) => {
    return {
        type: GET_PRESENT,
        data
    }
};

export const ChangPictureAC = (data) => {
    return{
        type: CHANG_PICTURE,
        data
    }
};


export const ItemsPutThunk = (data) => (dispatch) => {
    dispatch(PresentGetAC(data))

};