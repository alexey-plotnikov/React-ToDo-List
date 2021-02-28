import {ACTIONS} from "common/constants";

let toDoId = 0;

export const addToDo = (text) => {
    return {
        type: ACTIONS.ADD_TODO,
        id: toDoId++,
        text: text
    }
}