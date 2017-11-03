
export function addWord(obj){
    return function(dispatch){
        dispatch({type:"ADD_WORD",data:obj})
    }
}
