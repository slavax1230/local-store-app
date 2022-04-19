import {GET_STORES} from '../actions'

const initialState = {
    allstores: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_STORES:
            return{
                ...state,
                allStores: action.data 
            };
        default:
            return state;
    }
}