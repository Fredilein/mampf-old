<template>
  <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Create an account
        </h2>
        <p class="mt-2 text-sm text-center text-gray-600">
          Already have an account?
          <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </router-link>
        </p>
      </div>

      <form
        class="mt-8 space-y-4"
        @submit.prevent="registerUser"
      >
        <div>
          <label for="name" class="sr-only">Email address</label>
          <input id="name" name="name" type="text" autocomplete="username" required class="inp-account" placeholder="Username" v-model="register.name">
        </div>
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" required class="inp-account" placeholder="Email address" v-model="register.email">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="inp-account" placeholder="Password" v-model="register.password">
        </div>
        <div>
          <button type="submit" class="btn-account">
            Register
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
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("/user/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>
