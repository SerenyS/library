<template>
<div class="card">
  <div class="card-body">  
  <h2>{{item.title}}</h2> 
  <button class="btn btn-danger" v-if="item.isAvailable()" @click="item.checkOut() ">Remove</button>  
  </div>  
</div>
   
</template>

<script>

// FOR ALL CHECKED OUT ITEMS ADD TO BAG

export default {
   name: "Bag",

  components: {

  },
  props: {
  item: Object,
  removeItem: Function,
  },

};
</script>