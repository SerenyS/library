<template>
<div>
  <div class="card-columns">
  
<div>
  <h1>CART </h1>
  <bag  v-for="(item) in library.addedToBag()"
                  :item="item"
                   :key="item.inBag"
                   ></bag>
  <button class="btn btn-secondary" @click="bag.clear() " >Check out</button>


</div>
<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" v-model="searchTerm"></b-form-input>
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
 import axios from "axios";

import {Book, Movie,Album} from "@/models/LibraryItems";

import LibraryItem from "@/components/LibraryItem";

import Bag  from "@/components/Bag";

export default {
  name: "Library",
  components: {
    LibraryItem,
    Bag
  },
  methods:{
    search(){
      if(this.searchTerm){
        this.searchResult = new LibraryCollection();

        let url = 'https://itunes.apple.com/search?parameterkeyvalue';
        let config={
          term : this.searchTerm,
          country: US,
          // callback :
          media: movie,
          limit:15,


        }
          axios.get(url, config)
                    .then((response) => {
                       
                        this.searchResults = new BookCollection(response.data.items);
                             
                    })
                    .catch((error) => {
                       
                    })
                    .finally(() => {
                  
                    })

            }
        
      }
    }
  },
  data() {
    return {
      searchTerm:'',
      searchResult: new LibraryCollection();

      library: new LibraryCollection();

          // .addItem(new Album('The Black Parade','My Chemical Romance',14))
          // .addItem(new Book('Star Wars', 'Space Opera', 345))
          // .addItem(new Movie('Star Wars 1', 'Space Opera', 345))
          // .addItem(new Movie('Star Wars 2', 'Space Opera', 345))
          // .addItem(new Movie('Star Wars 3', 'Space Opera', 345))
    }
    
  
}
</script>

<style scoped>

</style>