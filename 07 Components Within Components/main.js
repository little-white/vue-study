Vue.component('task-list', {
  template: '<ul><task v-for="task in tasks" :task=task></task></ul>',
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
  template: '<li>{{ task.name }}</li>',
  props: ['task']
})

new Vue({
  el: '#app'
})