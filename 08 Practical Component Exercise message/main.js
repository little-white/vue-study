Vue.component('message', {
  template: `
    <article class="message" v-show="isShow">
      <div class="message-header">
        <p>{{title}}</p>
        <button class="delete" v-on:click="hideModal"></button>
      </div>
      <div class="message-body">
       {{body}}
      </div>
    </article>
  `,
  props: ['title', 'body'],
  data: function () {
    return {
      isShow: true
    }
  },
  methods: {
    hideModal: function () {
      console.log(123)
      this.isShow = false;
    }
  }
})
new Vue({
  el: '#app'
})