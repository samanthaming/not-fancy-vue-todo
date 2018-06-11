new Vue({
  el: '#app',
  data: {
    todoText: '',
    todos: [
      {text: 'Drink water', id: 0},
      {text: 'Listen to podcast', id: 1},
      {text: 'Build something!', id: 2}
    ]
  },
  methods: {
    add() {
      this.todos.push({
        text: this.todoText,
        id: new Date().valueOf()
      });
      this.todoText = ''
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    deleteAll() {
      this.todos = []
    }
  }
})

/* NOTES

this.todos = this.todos.filter(item => item !== todo.id);

This won't work because JS. Can use splice or Vue.delete for vue 2.2

1. Using splice
this.todos.splice(index, 1);

2. Using Vue.delete
this.$delete(this.todos, index)
- it works with Object as well, you need to use a keyed object > this.$delete(this.objList, key)
- https://jsfiddle.net/james2doyle/386w72nn/

*/
