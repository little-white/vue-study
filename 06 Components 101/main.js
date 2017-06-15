Vue.component('task', {
  template: '<div>{{title}}<slot></slot></div>',
  data: function () {
    return {
      title: 'qiqi '
    }
  }
})
new Vue({
  el: '#app'
})