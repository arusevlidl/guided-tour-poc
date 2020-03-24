export const defaultStore = {
  state: {
    todos: [
      {
        id: 1,
        name: "Do this"
      },
      {
        id: 2,
        name: "Do that"
      },
      {
        id: 3,
        name: "Go there"
      }
    ]
  },
  mutations: {
    addTodo: function(state, { name }) {
      state.todos.push({ id: state.todos.length + 1, name });
    }
  }
};
