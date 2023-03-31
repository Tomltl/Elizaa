<script>
  import { ref } from 'vue';
  import axios from 'axios'
  // const token = localStorage.getItem("token")
  export default {
        data(){
      return{
        token: "",
        toggleModal:false
      };
      },
    setup() {
      let showMenu = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      return { showMenu, toggleNav };
    },
  mounted(){
    axios
      .get('http://localhost:1337/api/commentaires')
        .then((reponse) => {
            this.commantaire = reponse.data;
            this.token = localStorage.getItem('token')
          }) 
  },
  watch:{
  },
    computed:{
      logout() {
        localStorage.removeItem("token")
      },
    }
  };
</script>


<template>

  <div class="">
    <nav
      class="sm:px-12 lg:pl-3 mx-auto md:flex flex justify-between md:items-center bg-black">
      <div class="flex flex-col">
        <div @click="toggleNav" class="flex mt-9 md:mt-4 ml-9 lg:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-black
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current text-white">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 w-1/2 ml-10 mb-10 lg:flex lg:space-y-0 lg:flex-row lg:items-center md:mt-5">  
      <h1 class="text-white lg:w-full md:w-1/12 lg:mx-4 md:mx-0">SHOP</h1>
        <h1 class="text-white lg:w-full md:w-1/12 lg:mx-4 md:mx-0">COLLECTION</h1>
        <h1 class="text-white lg:w-full md:w-1/12 lg:mx-4 md:mx-0">ABOUT</h1>
        <h1 class="text-white lg:w-full md:w-1/12 lg:mx-4 md:mx-0">CONTACTS</h1>
    </ul> 
    </div> 
      <div class="flex items-center justify-between lg:ml-0 lg:mt-0 lg:mr-60 md:mt-4 md:ml-20">
    <img src="../../80-removebg-preview.png" alt="" class="w-1/2 lg:pr-4">
      </div>
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:mt-0">
      <!-- <div class="flex">
      <h1 class="text-white mx-5">CART</h1>
        <h1 class="text-white mx-5">ACCOUNT </h1>
    </div> -->
</ul>

    </nav>
  </div>

</template>



<style>
#categories{
  cursor: pointer;
}
</style>