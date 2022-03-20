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
      <button type="button" class="btn btn-primary"  @click='apply()'>Apply</button>
 
  </div>  
       <div style=" width: 760px" v-show="flag1" >
          <div style="display: inline;"  v-for="(item, index) in arr" :key="item.id">
              <button  v-if="item == 'd'" type="button"  class="btn btn-outline-danger" :disabled="item=='d'" @click='book(index)'> {{index}}:00 </button>
              <button  v-if="item == 'u'" type="button"  class="btn btn-outline-primary" :disabled="item=='d'" @click='book(index)'> {{index}}:00 </button>
          </div>
          <div >
          <button type="button" class="btn btn-primary"  @click='push()'>Apply</button>
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
    arr: {1:'u',2:'u',3:'u',4:'u',5:'u',6:'u',7:'u',8:'u',9:'u',10:'u',11:'u',12:'u',13:'u',14:'u',15:'u',16:'u',17:'u',18:'u',19:'u',20:'u',21:'u',22:'u',23:'u',24:'u'},
    counted : 0,
    flag1 : false,
    cabinet: {},
    date : "",
    booking: {},
    startTime: "",
    endTime : "",
  }
},
 methods : {
    apply() {

      for(var i in this.arr){

          for(var index in this.booking){

              var booking = this.booking[index]; 
              var start = booking['time_start'].split(" ");    
              var end = booking['time_end'].split(" ");    
              start = start[1].split(":00")
              end = end[1].split(":00")
              start = start[0]
              end = end[0]

              if(start < 10) {
                start = start.split("0")
                start = start[1]
              }
              if(end < 10){
                end = end.split("0")
                end = end[1]
              } 
              if(start - end != 1)
                  end -=1 ;

              for( var qwety = start ; qwety <= end ; qwety++){   

                  if(i == qwety)
                  {
                      this.arr[i] = 'd'

                  }
              }
          }
      }

      this.flag1 = true;
    },
    push(){
      axios.post('http://127.0.0.1:8000/api/booking', {
        "user_id" : 1,
        "cabinet_id" : this.$route.params.id,
          "time_start" : this.date +' '+this.startTime,
          "time_end" : this.date +' '+this.endTime,
      })
      .then(response => (this.cabinet = response.data));
      this.$router.push('/') 

    },
    book(string){

      if(string < 10)
          string = "0" + string
      
      string = string + ":00"

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

      axios.get('http://127.0.0.1:8000/api/cabinet/' +  this.$route.params.id).then(response => (this.cabinet = response.data));

      axios.post('http://127.0.0.1:8000/api/booking/test', {
                "id" : this.$route.params.id,
                "time" : this.date
            }).then(response => (this.booking = response.data))
  }
}
</script>

