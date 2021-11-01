<template>
  <div class="card">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
     <button class="btn btn-secondary" v-if="item.isAvailable()" @click="item.inBag() ">Add to Bag</button>
      <button class="btn btn-secondary" v-else-if="item.isInBag()" disabled>Added to Bag</button>
    
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