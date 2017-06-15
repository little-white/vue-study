Vue.component('modal', {
  template: `
    <div class="modal" :class="{'is-active': isActive}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close" v-on:click="hideModal"></button>
    </div>
  `,
  props: ['isActive'],
  methods: {
    hideModal: function () {
      this.$emit('hide-modal');
    }
  }
})

new Vue({
  el: '#app',
  data: {
    isActive: false
  },
  methods: {
    showModal: function () {
      this.isActive = true;
    },
    hideModal: function () {
      this.isActive = false;
    }
  }
})