//types
const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS";
const GET_TODOS_FAILURE="GET_TODOS_FAILURE";

//action creators
export const getTodosSuccess=(todos:Todo[]):GetTodosSuccess=>({
    todos,
    type:GET_TODOS_SUCCESS

});

//redux thunk for todos

