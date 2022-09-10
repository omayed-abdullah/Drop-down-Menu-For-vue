<template>
   <div class="container">
      <div class="min-vh-100 d-flex justify-content-center align-items-center row">
         <div class="col-4 position-relative">
            <input role="button" @blur="show=false" @click="show = !show" readonly v-model="label" class="form-control w-100">

            <div v-show="show" class="shadow-sm bg-light rounded border-primary border px-2 py-1 mt-2 position-absolute w-100">
               <li role="button" class="list-group-item xx" @mousedown="selectOption(item)" v-for="(item, index) in data" :key="index" >{{item.label}}</li>
            </div>

            <select class="form-select form-control mt-5" aria-label="Default select example" name="" id="">
            <option disabled selected >choose option...</option>
            <option value="">rbtr</option>
            <option value="">trbr</option>
            <option value="">brtbr</option>
            <option value="">btrbtr</option>
         </select>



         </div>
      </div>

   </div>
</template>

<script>
   import {ref} from "vue";
    export default {
        name: "drop-down",
       props:{
           data:{
              required:true,
              type: Array
           }
       },
       setup(){
           const value= ref();
           const label= ref("choose an option");
          const show = ref(false);
          const selectOption = (item) => {
             value.value = item.value;
             label.value = item.label;
          }
           return {
              show,
              value,
              label,
              selectOption,
           }
       }
    }
</script>

<style scoped>
.xx:hover{
   background-color: grey;
}
</style>
