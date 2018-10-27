<template>
    <header class="app-header dark-brown">
        <h1>My Pet Store</h1>
        <v-toolbar>
            <v-switch class="text" style="padding-top:25px;" label="Change theme" v-model="themeSwitched"></v-switch>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/home">Home</v-btn>
            <v-btn flat to="/pets">Pets</v-btn>
            <v-btn flat to="/about">About</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </header>
</template>

<script>
export default {
  name: "Header",
  props: [],
  themeSwitched: true,
  data() {
    return {
      themeSwitched: true
    };
  }
};
</script>
