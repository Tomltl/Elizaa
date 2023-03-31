<template>
<Navbar id="nav" />
  <body>
    <div id="all" class="flex justify-center flex-col lg:mt-1.5 md:my-20 lg:mb-0 md:mb-0 sm:mb-96">
      <h1 id="coll" class="lg:text-8xl md:text-6xl text-3xl text-white text-center md:text-center sm:text-center font-kanit font-bold">CP COMPANY</h1>
      <h1 id="metropolis" class="lg:text-8xl md:text-6xl text-3xl lg:text-transparent md:text-transparent lg:mb-1 md:mb-0 mb-10 text-center md:text-center sm:text-center font-kanit font-bold">METROPOLIS ASSITANT</h1>
    </div>
    <div class="flex justify-between lg:flex-row flex-col lg:mt-12">    
      <img id="anime2" class="lg:w-auto md:w-auto lg:mr-20 lg:ml-20 lg:my-0 md:my-20 mb-10 md:h-auto lg:h-4/5 " src="../../image1.jpeg">
    <div class="flex flex-col items-center">
      <div id="all" class="flex flex-col items-center"></div>
        <div id="oklm" class="lg:h-96 md:h-80 h-64 rounded-t-lg border-white border-t-4 border-l-4 border-r-4 w-full flex mt-0">
    <div id="chat_container" class="bg-transparent text-white overflow-y-scroll text-center flex flex-col">
      <div
        v-for="(chat, i) in wrapper"
        :key="i"
        class="wrapper"
        :class="{ ai: chat.isAi }"
      > 
        <Chat :chat="chat" :key="i" />
      </div>
    </div>
  </div>
    <div id="question_container" class="lg:h-60 md:h-60 h-52 px-10 bg-transparent border-white border-4 rounded-b-lg lg:border-t-4 lg:border-l-4 lg:border-r-4 lg:border-0 md:border-4 lg:rounded-b-sm md:rounded-b-lg flex flex-col lg:w-auto md:w-full  text-center overflow-y-scroll">
      <div class="bg-transparent text-white justify-end ">
      <form @submit.prevent="fetchAnswer">
        <button class="bg-transparent my-4 text-white" ref="questionInput">Comment retourner mon produit ?</button>
      </form>
      <form @submit.prevent="fetchReponse">
        <button class="bg-transparent my-4 text-white" ref="questionInput">Les produits sont-ils garantis ?</button>
      </form>
      <form @submit.prevent="fetchReponse2">
        <button class="bg-transparent my-4 text-white" ref="questionInput">Comment puis-je déterminer ma taille de vêtement sur votre site ?</button>
      </form>
      <form @submit.prevent="fetchReponse3">
        <button class="bg-transparent my-4 text-white" ref="questionInput">Est-ce que vous proposez des options de livraison express ?</button>
      </form>
      <form @submit.prevent="fetchReponse4">
        <button class="bg-transparent my-4 text-white" ref="questionInput">Comment puis-je contacter votre service clientèle si j'ai d'autres questions ?</button>
      </form>
    </div>
  </div>
</div>
<img id="anime" class="lg:w-auto lg:ml-20 lg:mr-20 lg:my-0 lg:mt-0 md:mt-20 mt-10 md:w-auto md:h-auto lg:h-auto" src="../../image2.jpeg">
</div>

  </body>
</template>



<script setup>
import { ref } from "vue";
import Chat from "@/components/Chat.vue";

const wrapper = ref([]);
const loading = ref(false);

const fetchAnswer = async () => {
  try {
    loading.value = true;
    const question = "Comment retourner mon produit ?"
    // await prompt("Ask VueChat...");
    wrapper.value.push({
      isAi: false,
      value: question,
    });
    wrapper.value.push({
      isAi: true,
      value: "Loading....",
    });
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });
    const data = await res.json();
    console.log(data);
    const parsedData = data.bot.trim();
    wrapper.value.pop();
    wrapper.value.push({
      isAi: true,
      value: parsedData,
    });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    this.$refs.questionInput.value = '';
  }
};

const fetchReponse = async () => {
  try {
    loading.value = true;
    const question = "Les produits sont-ils garantis ?"
    // await prompt("Ask VueChat...");
    wrapper.value.push({
      isAi: false,
      value: question,
    });
    wrapper.value.push({
      isAi: true,
      value: "Loading....",
    });
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });
    const data = await res.json();
    console.log(data);
    const parsedData = data.bot.trim();
    wrapper.value.pop();
    wrapper.value.push({
      isAi: true,
      value: parsedData,
    });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    this.$refs.questionInput.value = '';
  }
};

const fetchReponse2 = async () => {
  try {
    loading.value = true;
    const question = "Comment puis-je déterminer ma taille de vêtement sur votre site ?"
    // await prompt("Ask VueChat...");
    wrapper.value.push({
      isAi: false,
      value: question,
    });
    wrapper.value.push({
      isAi: true,
      value: "Loading....",
    });
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });
    const data = await res.json();
    console.log(data);
    const parsedData = data.bot.trim();
    wrapper.value.pop();
    wrapper.value.push({
      isAi: true,
      value: parsedData,
    });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    this.$refs.questionInput.value = '';
  }
};
const fetchReponse3 = async () => {
  try {
    loading.value = true;
    const question = "Est-ce que vous proposez des options de livraison express ?"
    // await prompt("Ask VueChat...");
    wrapper.value.push({
      isAi: false,
      value: question,
    });
    wrapper.value.push({
      isAi: true,
      value: "Loading....",
    });
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });
    const data = await res.json();
    console.log(data);
    const parsedData = data.bot.trim();
    wrapper.value.pop();
    wrapper.value.push({
      isAi: true,
      value: parsedData,
    });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    this.$refs.questionInput.value = '';
  }
};
const fetchReponse4 = async () => {
  try {
    loading.value = true;
    const question = "Comment puis-je contacter votre service clientèle si j'ai d'autres questions ?"
    // await prompt("Ask VueChat...");
    wrapper.value.push({
      isAi: false,
      value: question,
    });
    wrapper.value.push({
      isAi: true,
      value: "Loading....",
    });
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });
    const data = await res.json();
    console.log(data);
    const parsedData = data.bot.trim();
    wrapper.value.pop();
    wrapper.value.push({
      isAi: true,
      value: parsedData,
    });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    this.$refs.questionInput.value = '';
  }
};
</script>

<style>
#all{
  background-color: black;
}

#metropolis{
  /* @media (min-width: 640px) { */
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 2px;
  /* } */
}

@media (min-width: 1040px){
  #question_container{
    animation: anim3 6.5s;
  }
}

@media (min-width: 1040px){
  #coll{
    animation: anim5 3s;
  }
}

@media (min-width: 1040px){
  #metropolis{
    animation: anim6 3s;
  }
}


#question_container{
  /* flex: 0; */
  /* width: 40%; */
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 10px;
  /* border: solid white; */
  /* float: right;   */

  -ms-overflow-style: none;
  scrollbar-width: none;

  padding-bottom: 20px;
  scroll-behavior: smooth;
}

@media (min-width: 1040px){
#anime{
    animation: anim 3s;
  }
}

@media (min-width: 1040px){
#anime2{
    animation: anim2 3s;
  }
}

@media (min-width: 1040px){
#nav{
    animation: anim4 3s;
  }
}

@keyframes anim {
    0% {
      clip-path: polygon(0 100%, 100% 100%, 100% 90%, 0 100%);
    }

    100% {
      clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    }
  }

  @keyframes anim2 {
    0% {
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 91%);
    }

    100% {
      clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    }
  }

  @keyframes anim3 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes anim4 {
    0% {
      transform: translateY(-300px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes anim5 {
    from {
      opacity: 0;
      transform: scale(1.5);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes anim6 {
    from {
      opacity: 0;
      transform: scale(0.5);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

body{
  background-color: black;
}

#question_container::-webkit-scrollbar {
      width: 8px;
      border-radius: 5px;
    }

    #question_container::-webkit-scrollbar-thumb {
      background-color: #C6A77B;
      border-radius: 5px;
    }

    #question_container::-webkit-scrollbar-thumb:hover {
      background-color: #C6A77B;
      border-radius: 5px;
    }

    #question_container::-webkit-scrollbar-track {
      background-color: #68686886;
      border-radius: 5px;
    }

    #question_container::-webkit-scrollbar-track:hover {
      background-color: #68686886;
      border-radius: 5px;
    }
    


/* #question_container::-webkit-scrollbar {
  
} */

#chat_container::-webkit-scrollbar {
      width: 8px;
      border-radius: 5px;
    }

    #chat_container::-webkit-scrollbar-thumb {
      background-color: #C6A77B;
      border-radius: 5px;
    }

    #chat_container::-webkit-scrollbar-thumb:hover {
      background-color: #C6A77B;
      border-radius: 5px;
    }

    #chat_container::-webkit-scrollbar-track {
      background-color: #68686886;
      border-radius: 5px;
    }

    #chat_container::-webkit-scrollbar-track:hover {
      background-color: #68686886;
      border-radius: 5px;
    }

.wrapper {
  width: 100%;
  padding: 15px;
}

.ai {
  background: #241e16;
}


@media (min-width: 1040px){
#oklm{
  animation: anim3 6.5s;
}
}

#chat_container {
  flex: 1;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 10px;
  /* border: solid white; */
  /* float: right;   */

  -ms-overflow-style: none;
  scrollbar-width: none;

  padding-bottom: 20px;
  scroll-behavior: smooth;
}

/* hides scrollbar */
html::-webkit-scrollbar {
  display: none;
}

main {
  width: 100%;
  height: calc(100% - 80px);
}

</style>