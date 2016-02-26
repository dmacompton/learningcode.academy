import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    const id = Date.now()
    this.todos.push({
      id,
      text, 
      complete: false
    })

    this.emit('change');
  }
  handleActions(action) {
    console.log('action ', action);
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
// 2 метода для использования
// dispatcher.register - регистрация стора
// dispatcher.dispatch - диспечер стора
window.todoStore = todoStore;
window.dispatcher = dispatcher;
export default todoStore;
