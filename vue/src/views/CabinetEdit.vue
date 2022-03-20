<template>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  <div class="home" style="display: flex; justify-content: space-around; align-items: center;" >
      <div class="card" style="width: 20rem;">

      <label>number_cabinet</label>
      <input v-model="cabinet.number_cabinet"> 

      <label>status</label>
      <input v-model="cabinet.status">
      
      <label>description</label>
      <input v-model="cabinet.description">

      <button type="button" class="btn btn-primary"  @click='edit()'>Apply</button>
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
  }
},
  methods : {
  edit(){

      axios.put('http://127.0.0.1:8000/api/cabinet/' +  this.$route.params.id , {
          "number_cabinet": this.cabinet.number_cabinet,
          "status" : Boolean(this.cabinet.status),
          "description" : this.cabinet.description
      }).then(response => ( this.$router.push('/') ));
  }
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/api/cabinet/' +  this.$route.params.id).then(response => (this.cabinet = response.data));
  }
}
</script>

