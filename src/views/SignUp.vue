<template>
  <div class="sign-up">
    <div class="jumbotron">
      <h1 class="display-4">Create your account</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </div>
    <form>
      <h2>Complete the form to have your account</h2>
      <div class="form-row">
        <div class="col-md-4 mb-3" :class="{ invalid: $v.firstName.$error }">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            v-model="firstName"
            @input="$v.firstName.$touch()"
            class="form-control"
          />
        </div>
        <div class="col-md-4 mb-3 " :class="{ invalid: $v.lastName.$error }">
          <label>Last name</label>
          <input
            type="text"
            v-model="lastName"
            @input="$v.lastName.$touch()"
            class="form-control"
          />
        </div>
        <div class="col-md-4 mb-3" :class="{ invalid: $v.email.$error }">
          <label>Mail</label>
          <input
            type="text"
            v-model="email"
            @input="$v.email.$touch()"
            class="form-control"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label>State</label>
          <select class="custom-select">
            <option selected disabled value="">Select your country</option>
            <option>Argentina</option>
            <option>United States</option>
            <option>Italy</option>
            <option>France</option>
            <option>England</option>
            <option>Spain</option>
            <option>Switzerland</option>
            <option>New Zealand</option>
            <option>Sweeden</option>
            <option>Norway</option>
            <option>China</option>
            <option>Germany</option>
            <option>Japan</option>
            <option>Brazil</option>
            <option>Australia</option>
          </select>
        </div>
        <div class="col-md-4 mb-3" :class="{ invalid: $v.city.$error }">
          <label>City</label>
          <input
            type="text"
            v-model="city"
            @input="$v.city.$touch()"
            class="form-control"
            id="validationServer03"
            required
          />
          <div class="invalid-feedback">
            <!-- class="form-control is-invalid"
              Please provide a valid city. -->
          </div>
        </div>
        <div class="col-md-4 mb-3" :class="{ invalid: $v.zip.$error }">
          <label>Zip</label>
          <input
            type="text"
            v-model="zip"
            @input="$v.zip.$touch()"
            class="form-control"
          />
          <div class="invalid-feedback"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <button class="btn btn-danger" type="submit">Sign up now</button>
    </form>
  </div>
</template>

<script>
import { required, numeric, email } from "vuelidate/lib/validators";
export default {
  name: "SignUp",
  props: {
    msg: String,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      city: null,
      zip: null,
    };
  },

  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    email: {
      required,
      email,
    },
    city: {
      required,
    },
    state: {},
    zip: {
      required,
      numeric,
    },
  },
};
</script>

<style lang="css" scoped>
.sign-up {
  width: 100%;
  height: calc(100vh - 57.72px);
  background-image: url("../assets/10.gif");
  background-size: cover;
}
.jumbotron {
  background-color: #000000ad;
}

.display-4 {
  color: white;
  font-size: 4.5rem;
}

p.lead {
  color: white;
}

p {
  color: grey;
}

h2 {
  color: white;
  padding-bottom: 2rem;
}

form {
  padding-top: 8rem;
}

form label {
  color: white;
}
</style>
