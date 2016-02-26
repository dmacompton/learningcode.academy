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
  })
}
export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  })
}