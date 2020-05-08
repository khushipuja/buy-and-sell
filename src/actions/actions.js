export const addSavedItem=(item)=>{

    return{
        type:"ADD_ITEM",
        payload:item
    }
}

export const removeSavedItem=(id)=>{
    return{
        type:"REMOVE_ITEM",
        payload:id
    }
}

