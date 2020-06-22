<template>
  <span class="rating">
   
    <ul class="list">
      <li  v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star-3">
      <i :class="star <= stars ? 'fa fa-star' : 'fa fa-star'"></i> 
      </li>
    </ul>
  </span>
  
</template>
<script>
export default {
  name: 'GameRating',
  props: ['grade', 'maxStars', 'hasCounter'],
  data() {
    return {
      stars: this.grade
    }
  },
  methods: {
    rate(star) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
      }
    }
  },
  watch:{
    grade: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          this.stars=newVal
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/scss/rating.scss';
</style>