<template>
  <div class="home">
    <navbar />
    <h1>This is the home page</h1>
    <div v-if="user && user.name">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <div v-else>
      <p>Not logged in</p>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import navbar from "../components/Nav.vue";

export default {
  data() {
    return {
      user: {}
    };
  },
  components: {
    navbar
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },
  created() {
    this.getUserDetails();
  }
};
</script>

<style scoped></style>
