<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <drop-down :data="names"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import {ref} from 'vue';



export default {
  name: 'App',
  components: {
    Navbar
  },
  setup(){
    const names = ref([
      {value: 1,label:'Rahim'},
      {value: 2,label:'Karim'},
      {value: 3,label:'Salam'},
      {value: 4,label:'Rafiq'},
      {value: 5,label:'Kalam'},
      {value: 6,label:'Jobbar'},
    ]);
    return{
      names
    };
  }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'montserrat', sans-serif;
  }
  header {
    width: 100vw;
    background-color: #222;
    padding: 15px;
  }
</style>
