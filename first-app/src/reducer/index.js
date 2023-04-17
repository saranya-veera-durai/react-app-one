import { combineReducers } from "redux";
import {CHANGE_COLOR,RESET_COLOR} from "../action_types/index";
import { initialState } from "../initial_state";


function ColorReducer(state=initialState,action){
    switch(action.type){
        case CHANGE_COLOR:
            return{
                color:action.payload,
            };
        case RESET_COLOR:
            return{
                color:action.payload,
            };
        default:
            return state;
    }
    


}

export const rootReducer=combineReducers({ColorReducer:ColorReducer})