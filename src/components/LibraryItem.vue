<template>
  <div class="card">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
     <button class="btn btn-secondary" v-if="item.isAvailable()" @click="item.checkOut() ">Add to Bag</button>
      <button class="btn btn-secondary" v-else :disabled ="!item.isAvailable()">Added to Bag</button>
      <!-- <button class="btn btn-danger" @click="item.remove()">Remove</button> -->
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book";
import Movie from "@/components/Movie";
import Album from "@/components/Album";

export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album,
  },
  props: {
  item: Object,
  // removeItem: Function,
  },

  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>
</style>