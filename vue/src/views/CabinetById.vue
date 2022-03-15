<template>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  <div class="home" style="display: flex; justify-content: space-around; align-items: center;" >
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"> {{cabinet.number_cabinet}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{cabinet.status}}</h6>
    <p class="card-text">{{cabinet.description}}</p>
  <input  type="date" id="start" name="trip-start" :value="this.date" :min ="this.date">
  </div>

<button type="button" class="btn btn-primary"  @click='Click()'>Primary</button>
</div>


<div v-show="flag1" >
<div>
 <button type="button" @click='time("01:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">01:00</button>
 <button type="button" @click='time("02:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">02:00</button>
 <button type="button" @click='time("03:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">03:00</button>
 <button type="button" @click='time("04:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">04:00</button>
 <button type="button" @click='time("05:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">05:00</button>
 <button type="button" @click='time("06:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">06:00</button>
 <button type="button" @click='time("07:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">07:00</button>
 <button type="button" @click='time("08:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">08:00</button>
 <button type="button" @click='time("09:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">09:00</button>
 <button type="button" @click='time("10:00")'   :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">10:00</button>
 <button type="button" @click='time("11:00")'   :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">11:00</button>
 <button type="button" @click='time("12:00")'   :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">12:00</button>
</div>

<div>
 <button type="button" @click='time("13:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">13:00</button>
 <button type="button" @click='time("14:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">14:00</button>
 <button type="button" @click='time("15:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">15:00</button>
 <button type="button" @click='time("16:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">16:00</button>
 <button type="button" @click='time("17:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">17:00</button>
 <button type="button" @click='time("18:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">18:00</button>
 <button type="button" @click='time("19:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">19:00</button>
 <button type="button" @click='time("20:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">20:00</button>
 <button type="button" @click='time("21:00")'  :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">21:00</button>
 <button type="button" @click='time("22:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">22:00</button>
 <button type="button" @click='time("23:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">23:00</button>
 <button type="button" @click='time("00:00")' :style="{ color: activeColor}" class="btn btn-light" style="margin: 10px;">00:00</button>
</div>


<button type="button" class="btn btn-primary"  @click='Push()'>Apply</button>
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
    startTime: "",
    endTime : ""
  }
},
 methods : {
Click() {
      // axios.post('http://abdula.loc/api/booking/test', {
      //     "id" : this.$route.params.id,
      //     "time" : this.date
      // }).then(response => (this.booking = response.data))

    //   .then(response => (this.booking = response.data.forEach(function(data, index) {
    //     var start = data['time_start'].split(" ");    
    //     var end = data['time_end'].split(" ");  
    // })));
    this.flag1 = true;
    },
    Push(){
      axios.post('http://abdula.loc/api/booking', {
        "user_id" : 1,
        "cabinet_id" : this.$route.params.id,
          "time_start" : this.date +' '+this.startTime,
          "time_end" : this.date +' '+this.endTime,
      })
      .then(response => (this.cabinet = response.data));
    },
    time(string){

      this.counted = this.counted + 1
      if (this.counted == 1)
      {
        this.startTime = string;
        this.counted = this.counted + 1 
      }
      else if (this.counted == 3)
      {
        this.endTime = string;
        this.counted = this.counted + 1 
      }
      if (this.counted == 5)
          {
            this.counted = 2
            this.startTime = string;

          }

    }

    },
      mounted() {
       var d = new Date();
       this.date = (  d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2))

    axios.get('http://abdula.loc/api/cabinet/' +  this.$route.params.id)
      .then(response => (this.cabinet = response.data));
  }
}
</script>

