Vue.component('task-list', {
  template: '<ul><task v-for="task in tasks">{{ task.name }}</task></ul>',
  data: function () {
    return {
      tasks: [{
        name: 'task 1'
      }, {
        name: 'task 2'
      }]   
    }
  }
})

Vue.component('task', {
  template: '<li><slot></slot></li>'
})

new Vue({
  el: '#app'
})