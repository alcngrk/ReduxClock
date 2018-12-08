import { combineReducers } from 'redux';

const initialState = { 
    time: new Date,
    elapsedTime: 0,
}

function newTimeReducer(state = initialState, action) {
    switch(action.type){
        case "CHANGE_TIME":
            return action.payload;  //remember changeTime() function
        default:
            return {
                time: state.time ,
                elapsedTime: state.elapsedTime,
            };
    }
}

//
export default combineReducers({
    time: newTimeReducer,
});