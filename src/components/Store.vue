<template>
  <div class="content">
    <ul>
      <li v-for="(warrior, index) in warriors" :key="index">
        <button class="dis-none" @click="showModal = true"><MyCard :name="warrior.name" :level="warrior.level"/></button>
        <MyModal :name="warrior.name" :level="warrior.level" v-if="showModal" @close="showModal = false"/>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";
import MyCard from "@/components/UI/MyCard";
import MyModal from "@/components/UI/MyModal";

export default {
  name: "Store",
  components: {MyModal, MyCard},
  data() {
    return {
      info: null,
      warriors: [],
      showModal: false
    }
  },
  methods:{
    check() {
      axios
          .get('http://51.158.175.189:8002/api/v1/warriors', {headers: {
              'Authorization': `token ${localStorage.getItem('token')}`
            }})
          .then(response => (this.createWarriors(response.data.results)));
      console.log(this.warriors)
    },
    createWarriors(data){
      for(let i = 0; i < data.length; i+=1){
        let warrior = {name: data[i].name, level: data[i].level}
        this.warriors.push(warrior)
      }
    }
  },
  beforeMount() {
    this.check()
  }
}

</script>

<style scoped>
 ul{
   display: flex;
   list-style: none;
   color: black;

 }
 li{
   margin-right: 15px;
 }
.dis-none{
  background-color: transparent;
  border: none;
}

</style>