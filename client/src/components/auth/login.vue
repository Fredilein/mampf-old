<template>
  <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <form
        class="mt-8 space-y-6"
        @submit.prevent="loginUser"
      >
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" required class="inp-account" placeholder="Email address" v-model="login.email">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="inp-account" placeholder="Password" v-model="login.password">
        </div>
        <p>
          Dont have an account??<router-link to="/register"
            >click here</router-link
          >
        </p>
        <div>
          <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent shadow group rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:shadow-md hover:shadow-md">
            Sign in
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Login Successful", "success");
          this.$router.push("/");
        }
      } catch (err) {
        swal("Error", "Wrong username or password", "error");
        console.log(err.response);
      }
    }
  }
};
</script>
