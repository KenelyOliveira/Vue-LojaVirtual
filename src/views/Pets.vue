<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <app-dog :dog="pet"></app-dog>
      </v-flex>

    </v-layout>
  </v-container>
</template>


<script>
import axios from "axios";
import { Dogs } from "../data/dogs";
import Dog from "../components/Dog.vue";

axios.defaults.baseURL = "https://dog.ceo/api";

export default {
  components: {
    appDog: Dog
  },
  data() {
    return {
      dogs: Dogs
    };
  },
  created() {
    axios
      .get("/breed/husky/images/random")
      .then(response => {
        const husky = this.dogs.find(dog => dog.breed === "husky");
        husky.img = response.data.message;
        //console.log(husky);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>




<style scoped>
p {
  margin: 0;
}
</style>
