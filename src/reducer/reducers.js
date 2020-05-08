// import data from '../data.json';
import {combineReducers} from 'redux'

const initState={
    saved:[]
}

const savedList=(state=initState,action)=>{
    if(action.type==='ADD_ITEM')
    {
        return{
            saved:[...state.saved,action.payload]
        }
    }
    else if(action.type==='REMOVE_ITEM')
    {
        return{
            saved:state.saved.filter(item=>item.id !==action.payload)
        }
    }
    return state;

}


export default combineReducers({

    savedList
})