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
  <input  type="date" id="start" name="trip-start" :value="this.date" :min ="this.date">
  </div>

<button type="button" class="btn btn-primary"  @click='Click()'>Primary</button>
</div>


<div v-show="flag1" >
<div>
 <button type="button" id="1"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">1:00</button>
 <button type="button" id="2"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">2:00</button>
 <button type="button" id="3"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">3:00</button>
 <button type="button" id="4"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">4:00</button>
 <button type="button" id="5"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">5:00</button>
 <button type="button" id="6"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">6:00</button>
 <button type="button" id="7"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">7:00</button>
 <button type="button" id="8"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">8:00</button>
 <button type="button" id="9" ref="textName" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">9:00</button>
 <button type="button" id="10"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">10:00</button>
 <button type="button" id="11"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">11:00</button>
 <button type="button" id="12"  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">12:00</button>
</div>

<div>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">13:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">14:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">15:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">16:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">17:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">18:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">19:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">20:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">21:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">22:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">23:00</button>
 <button type="button" :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">00:00</button>
</div>


<button type="button" class="btn btn-primary"  @click='Click()'>Apply </button>
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
    activeColor: 'blue',
    counted : 0,
    flag1 : false,
    cabinet: {},
    date : "",
    booking: {},
  }
},
 methods : {
Click() {
    this.flag1 = true;
      axios.post('http://abdula.loc/api/booking/test', {
          "id" : this.$route.params.id,
          "time" : this.date
      })
      .then(response => (this.booking = response.data.forEach(function(data, index) {
        var start = data['time_start'].split(" ");    
        var end = data['time_end'].split(" ");    

        


  
         // for(var i = 0; i < minus; i++)
      


    })));




      },
    },
      mounted() {
       var d = new Date();
       this.date = (  d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2))

    axios.get('http://abdula.loc/api/cabinet/' +  this.$route.params.id)
      .then(response => (this.cabinet = response.data));
  }
}
</script>

