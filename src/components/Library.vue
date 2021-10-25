<template>
<div>
  <div class="card-columns">
  
<div>
  <h1>CART </h1>
  <bag  v-for="(item, i) in library"
                  :item="item"
                   :key="!item.isAvailable"
                   :forlater="i"></bag>
  <button class="btn btn-secondary" >Check out</button>


</div>

     <library-item 
                  v-for="(item, i) in library"
                  :item="item"
                   :key="item.id"
                   :forlater="i"
    ></library-item>

  </div>
</div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";

import BagModel from "@/models/BagModel";

import {Book, Movie,Album} from "@/models/LibraryItems";

import LibraryItem from "@/components/LibraryItem";

import Bag  from "@/components/Bag";

export default {
  name: "Library",
  components: {
    LibraryItem,
    Bag
  },
  data() {
    return {
      bag: new BagModel(),
      library: new LibraryCollection()
          .addItem(new Album('The Black Parade','My Chemical Romance',14))
          .addItem(new Book('Star Wars', 'Space Opera', 345))
          .addItem(new Movie('Star Wars 1', 'Space Opera', 345))
          .addItem(new Movie('Star Wars 2', 'Space Opera', 345))
          .addItem(new Movie('Star Wars 3', 'Space Opera', 345))
    }
  },
  // FOR EACH ITEM WITH THE STATUS "OUTLIBRARY" ADD TO NEW LIBRARY COLLECTION BAG 
}
</script>

<style scoped>

</style>