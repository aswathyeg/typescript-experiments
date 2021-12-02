export interface Todo{
    id:string;
    title:string;
    

}
export interface GetTodoSuccess{
    todos:Todo[];
    type:GET_TODOS_SUCCESS;
}