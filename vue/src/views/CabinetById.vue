<template>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  <div class="home" style="display: flex; justify-content: space-around; align-items: center;" >
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">{{cabinet.number_cabinet}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{cabinet.status}}</h6>
    <p class="card-text">{{cabinet.description}}</p>
  </div>
  <input  type="date" id="start" name="trip-start" :value="this.date" :min ="this.date">

<button type="button" class="btn btn-primary">Primary</button>
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
    cabinet: {},
    date : ""
  }
},
 methods : {

    },
      mounted() {
       var d = new Date();
       this.date = (  d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2))

    axios.get('http://abdula.loc/api/cabinet/' +  this.$route.params.id)
      .then(response => (this.cabinet = response.data));
  }
}
</script>

