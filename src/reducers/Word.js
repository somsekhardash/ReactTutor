export default function reducer(state={
    synonyms : [],
    word: null,   
    meaning: null,
    example: null
},action) {
    switch(action.type){
        case "ADD_WORD" : {
            return [...state,action.data]
        }
        default:
            return state;
    }
}


