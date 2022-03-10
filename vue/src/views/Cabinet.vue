<template>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  <div class="row" >
    <div class="card" style="width: 18rem;"  v-for="(cabinet) in cabinets" :key="cabinet.id">
  <div class="card-body">
    <h5 class="card-title">{{cabinet.number_cabinet}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{cabinet.status}}</h6>
    <p class="card-text">{{cabinet.description}}</p>
    <a v-bind:href='"http://localhost:8080/CabinetById/"+cabinet.id'  class="card-link">Open</a>
    <a href="#" class="card-link">delete</a>
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
    cabinets: {}
  }
},
 methods : {
 
    },
      mounted() {
    axios.get('http://abdula.loc/api/cabinet')
       .then(response => (this.cabinets = response.data));
  }
}
</script>

<style>
div{
  border: solid, 1px
}
</style>