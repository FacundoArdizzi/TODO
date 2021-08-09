import { ADD_TODO, DELETE_TODO, FINISH_TODO, UNFINISH_TODO, ITodo } from "../constants";

export interface IAddTodoAction {
    type: ADD_TODO, 
    payload: ITodo,
}

export interface IDeleteTodoAction {
    type: DELETE_TODO, 
    payload: number, 
}

export interface IFinishTodoAction {
    type: FINISH_TODO, 
    payload: number, 
}

export interface IUnfinishTodoAction {
    type: UNFINISH_TODO, 
    payload: number,
}

export type Actions = IAddTodoAction | IDeleteTodoAction |   IFinishTodoAction | IUnfinishTodoAction

export const addTodo = (payload: ITodo): IAddTodoAction => {
    return { type: ADD_TODO, payload: payload}
}

export const deleteTodo = (num: number): IDeleteTodoAction => {
    return { type: DELETE_TODO, payload: num}
}

export const finishTodo = (num: number): IFinishTodoAction => {
    return { type: FINISH_TODO, payload: num}
}

export const unfinishTodo = (num: number): IUnfinishTodoAction => {
    return { type: UNFINISH_TODO, payload: num}
}