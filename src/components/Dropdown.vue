<template>
   <div class="container">
      <div class="min-vh-100 d-flex justify-content-center align-items-center row">
         <div class="col-4 position-relative">
            <input @blur="show=false" @click="show = !show" readonly v-model="value" class="form-control w-100">

            <div v-show="show" class="shadow-sm bg-light rounded border-primary border px-2 py-1 mt-2 position-absolute w-100">
               <li class="xx" @mousedown="value = 'wewe'">wewe</li>
               <li class="xx" @mousedown="value = 'dfdf'">dfdf</li>
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
       setup(){
           const value= ref("choose an option");
          const show = ref(false);
           return {
              show,
              value
           }
       }
    }
</script>

<style scoped>
.xx:hover{
   background-color: grey;
}
</style>
