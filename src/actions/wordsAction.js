import axios from "axios";

export function fetchWords(){
   // return function(dispatch){
        // //var res = 
        // console.log("das");
        // axios.get("https://api.myjson.com/bins/z845t").then(function(res){
        //     return({type:"FETCH_WORDS",data: res})
        // })
        console.log("i m here");
        var res = [{"word":"Egotist","meaning":"The height of conceited , having or showing an excessively high opinion of oneself","example":"","synonyms":[]},{"word":"Egoist","meaning":"Someone who realizes that acting in their own rational self-interest is more important than living up to other people's expectations or trying to please society; someone who is proud of their own accomplishments and knows that his life has great value.","example":"","synonyms":["Swellhead","selfish person"]},{"word":"Ambivert","meaning":"both introvert and extroverted","example":"","synonyms":[]},{"word":"misanthrope","meaning":"People who hate everyone","example":"","synonyms":["crank"]},{"word":"Misogynist","meaning":"Who hate women","example":"","synonyms":[]},{"word":"misogamist","meaning":"who hates marriage","example":"","synonyms":[]},{"word":"Ascetic","meaning":"practicing strict self-denial as a measure of personal and especially spiritual discipline","example":"","synonyms":[]},{"word":"maladies","meaning":"Undesirable condition or disordered condition","example":"a serious problem.","synonyms":["disorder","disease"]},{"word":"gynecologist","meaning":"is the medical practice dealing with the health of the female reproductive systems","example":"","synonyms":[]},{"word":"obstetrician","meaning":"This specialist delivers babies and takes care of the mother","example":"","synonyms":[]},{"word":"pediatrician","meaning":"for common childhood maladies doctor","example":"","synonyms":[]},{"word":"dermatologist","meaning":"skin doctor","example":"","synonyms":[]},{"word":"ophthalmologist","meaning":"eye doctor","example":"","synonyms":[]},{"word":"orthopedist","meaning":"bone doctor","example":"","synonyms":[]},{"word":"cardiologist","meaning":"heart doctor","example":"","synonyms":[]},{"word":"neurologist","meaning":"brain doctor","example":"","synonyms":[]},{"word":"psychiatrist","meaning":"mental doctor","example":"","synonyms":[]},{"word":"alleviate","meaning":"To make (pain, for example) more bearable","example":"","synonyms":["relieve"]},{"word":"uptight","meaning":"being tense, nervous, or uneasy","example":"","synonyms":["nervous","worried"]}];
        return {type:"FETCH_WORDS",data: res}
    //}
}

export function testing(){
    return function(dispatch){
        console.log("i m here");
        return {type:"testing",data:"testing"}
    }
}


export function addWords(obj){
    return function(dispatch){
        dispatch({type:"ADD_WORDS",data:obj})
    }
}

export function removeWords(obj){
    console.log(obj);
    return {type:"REMOVE_WORDS",data: obj}
    // return function(dispatch){
    //     dispatch({type:"REMOVE_WORDS",data:obj})
    // }
}

export function addWord(obj){
    return function(dispatch){
        dispatch({type:"ADD_WORD",data:obj})
    }
}


// export const testing = () => {
//     alert("asd");
//     console.log("i am here");
//     return {
//         type: "testing",
//         data: []
//     }
// } 