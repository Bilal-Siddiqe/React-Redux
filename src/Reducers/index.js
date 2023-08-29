import { combineReducers } from 'redux';
const  initailValue = 15;
const add = ( state = initailValue , action )=>{
    switch(action.type){
        case "Number" : return state + 1;
        default: return state;
    }
}
const rootReducer = combineReducers({add});
export {add,rootReducer};


