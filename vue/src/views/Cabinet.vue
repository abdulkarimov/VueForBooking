<template>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
   <form class="d-flex justify-content-center">
    <input type="text" placeholder="Search.." v-model="searchCabient">  
       <button type="button" @click='search(searchCabient)'>Search</button>
  </form>

  <div class="row">
    <div class="card" style="width: 10rem;  display: block;
    margin-left: auto;
    margin-right: auto "  v-for="(cabinet) in cabinets" :key="cabinet.id">
  <div class="card-body">
    <h5 class="card-title">{{cabinet.number_cabinet}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{cabinet.status}}</h6>
    <p class="card-text">{{cabinet.description}}</p>
    <a v-if="cabinet.status != false"  v-bind:href='"http://localhost:8080/CabinetById/"+cabinet.id'  class="card-link">Open</a>
    <a  v-bind:href='"http://localhost:8080/CabinetEdit/"+cabinet.id'  class="card-link">Edit</a>
  </div>
</div>


  </div>


  </body>
  </html>
</template>

<script>
import axios from 'axios';
export default {
 data: function () {
  return {
    searchCabient : "",
    cabinets: {}
  }
},
 mounted() {
      axios.get('http://127.0.0.1:8000/api/cabinet/')
        .then(response => (this.cabinets = response.data));
  },

 methods: {
      search(cabinetNumber){
        this.cabinets = null;
        axios.get('http://127.0.0.1:8000/api/cabinet/',{ 
          params: { 
            number_cabinet : cabinetNumber 
          } 
        })
       .then(response => (this.cabinets = response.data))
      }
    },
}

</script>

<style>
div{
  border: solid, 1px
}
</style>