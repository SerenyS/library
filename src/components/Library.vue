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

<input type="text" @click="search()" placeholder="Search title.."/>


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

// import {Book, Movie,Album} from "@/models/LibraryItems";

import {Movie,Album} from "@/models/LibraryItems";

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
      searchTerm:'',
      searchResult: new LibraryCollection(),
      library: new LibraryCollection()

          // .addItem(new Album('The Black Parade','My Chemical Romance',14))
          // .addItem(new Book('Star Wars', 'Space Opera', 345))
          // .addItem(new Movie('Star Wars 1', 'Space Opera', 345))
          // .addItem(new Movie('Star Wars 2', 'Space Opera', 345))
          // .addItem(new Movie('Star Wars 3', 'Space Opera', 345))
    }
    
  
},
  methods:{

    //This method allow passing the search tem to the api params 
    search (){
      if(this.searchTerm){
        let url = 'https://itunes.apple.com/search';
        let config ={
          params:{
            term: this.searchTerm,
            limit: 24,
          }
        }
      // promise where it uses api url and prams from searchTerm
      axios.get(url, config)
      .then((response=>{
        console.log('ajax responded', response);

        if (response.data.results.length){
          // create new library item from search 
          // if wrapper type equals track define what is item kind and store in that component type
          response.data.results.forEach((item)=>{

            if(item.wrapperType === track){
              switch(item.kind){
                case "album":
                  return Object.assign(new Album, item);
                case "feature-movie":
                  return Object.assign(new Movie, item);
              }
            }
          // add library item from search to library LibraryCollection
            if(LibraryItem){
              this.library.addItem(LibraryItem)
            }
          })

        }
      }))
      }

    }
  }

}
</script>

<style scoped>

</style>