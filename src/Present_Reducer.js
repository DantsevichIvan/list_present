import {CHANG_PICTURE, GET_PRESENT} from "./Action_Present";

const initialState = {
    present: [
        {inits: []}
    ]
};


const presentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRESENT : {
            return {
                ...state,
                present: action.data
            }
        }
        case CHANG_PICTURE: {
            return {
                ...state,
                ...state.present.inits,
                inits: action.data
            }
        }
        default:
            return {
                state
            }
    }


}


export default presentReducer


// id: '',
// image: '',
// name: '',
// description: '',
// start: '',
// end: '',
// probability_total: '',
// __typename: '',
// items: [
//     {
//         id: '',
//         image: '',
//         name: '',
//         description: '',
//         level: '',
//         chang: '',
//         cost: '',
//         tags: [],
//         __typename: ''
//     }
// ]


