import { combineReducers } from "redux";

import words from "./Words";
import word from "./Word";

export default combineReducers({
    allWords: words,
    word
})
