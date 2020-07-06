const app = new Vue({
  el: '#app',
  data: {
    images
  },
  computed: {
    galleries: function () {
      return [...new Set(this.images.map(image => image.gallery))]
    }
  }
})
