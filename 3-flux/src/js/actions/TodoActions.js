import dispatcher from '../dispatcher';

// es5
// export default {
  // createTodo: {}
// }

// es6 way
export function createTodo(text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  });
}
export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
}
export function reloadTodos() {
  // ajax запрос
  dispatcher.dispatch({type: "FETCH_TODOS"})
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
        {
          id: 12312512,
          text: "Go Shopping Again",
          complete: false
        },
        {
          id: 53463453,
          text: "Hug Wife",
          complete: true
        },
      ]});
      if(false) {
        dispatcher.dispatch({type: "FETCH_TODOS_ERROR"});
      }
  }, 1000);
}
