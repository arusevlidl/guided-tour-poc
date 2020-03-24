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
    ],
    tour: {
      mainPage: {
        show: true,
        steps: [
          {
            target: "#v-step-0",
            content: `Type the name of the todo`
          },
          {
            target: "#v-step-1",
            content: `Click here to add it`
          },
          {
            target: "#v-step-2",
            content: `After clicking your todo will be added in the bottom of the list`
          }
        ]
      },
      todoPage: {
        show: true,
        steps: [
          {
            target: "#v-step-3",
            content: `This is the name of the Todo`
          },
          {
            target: "#v-step-4",
            content: `If you want to return to the main page, click here`
          }
        ]
      }
    }
  },
  mutations: {
    addTodo: function(state, { name }) {
      state.todos.push({ id: state.todos.length + 1, name });
    },
    disableTour: function(state, { page }) {
      if (state.tour[page]) {
        state.tour[page].show = false;
      }
    }
  }
};
