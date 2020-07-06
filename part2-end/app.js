Vue.component('photo', {
  props: ['image', 'index'],
  template: `
  <figure @click="$emit('update-featured', index)">
    <img class="img-fluid" :src="'../assets/images/' + image.photo_id + '.jpg'" :alt="'image by ' + image.user_name">
    <figcaption>Image by <a :href="image.user_url" target="_blank">{{ image.user_name }}</a></figcaption>
  </figure>
  `
})

Vue.component('gallery', {
  data: function () {
    return {
      featured: 0
    }
  },
  props: ['images', 'gallery'],
  template: `
  <section class="gallery">
    <h2 class="gallery-title">{{ gallery }}</h2>
    <template v-for="(image, index) in images">
      <div class="gallery-featured" v-if="index === featured">
        <photo :image="image" :index="index" />
      </div>
      <div v-else>
        <photo :image="image" :index="index" @update-featured="featured=$event" />
      </div>
    </template>
  </section>`
})

const app = new Vue({
  el: '#app',
  data: {
    images
  },
  methods: {
    filterImages: function (gallery) {
      return images.filter(image => image.gallery === gallery)
    }
  },
  computed: {
    galleries: function () {
      return [...new Set(this.images.map(image => image.gallery))]
    }
  }
})
