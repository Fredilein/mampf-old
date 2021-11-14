<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="p-5 text-center border border-primary"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="registerUser"
        >
          <input
            type="text"
            id="name"
            class="mb-5 form-control"
            placeholder="Name"
            v-model="register.name"
            required
          />
          <input
            type="email"
            id="email"
            class="mb-5 form-control"
            placeholder="Email"
            v-model="register.email"
            required
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="mb-5 form-control"
            placeholder="Password"
            v-model="register.password"
          />
          <p>
            Already have an account??<router-link to="/"
              >click here</router-link
            >
            <!-- Sign in button -->
            <center>
              <button class="my-4 btn btn-primary btn-block w-75" type="submit">
                Sign in
              </button>
            </center>
          </p>
        </form>
      </div>
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
