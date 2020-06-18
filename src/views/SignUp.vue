<template>
  <div class="sign-up">
    <div class="jumbotron">
      <h1 class="display-4">Create your account</h1>
      <p class="lead">
        Get your account to enjoy all the content that SnapFlick has to give
        you!
      </p>
      <p>
        What are you waiting for?
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
          <p v-if="!$v.firstName.required">Enter your first name</p>
        </div>
        <div class="col-md-4 mb-3 " :class="{ invalid: $v.lastName.$error }">
          <label>Last name</label>
          <input
            type="text"
            v-model="lastName"
            @input="$v.lastName.$touch()"
            class="form-control"
          />
          <p v-if="!$v.lastName.required">Enter your last name</p>
        </div>
        <div class="col-md-4 mb-3" :class="{ invalid: $v.email.$error }">
          <label>Mail</label>
          <input
            type="email"
            v-model="email"
            @input="$v.email.$touch()"
            class="form-control"
          />
          <p v-if="!$v.lastName.required">Enter your Mail</p>
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
          />
          <p v-if="!$v.city.required">Enter your City</p>
        </div>
        <div class="col-md-4 mb-3" :class="{ invalid: $v.cellNumber.$error }">
          <label>Cell number</label>
          <input
            type="number"
            v-model="cellNumber"
            @input="$v.cellNumber.$touch()"
            class="form-control"
          />
          <p v-if="!$v.cellNumber.required">Enter your cell number</p>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="invalidCheck"
            required
          />
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
import { required } from "vuelidate/lib/validators";
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
      cellNumber: null,
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
    },
    city: {
      required,
    },
    state: {},
    cellNumber: {
      required,
    },
  },
};
</script>

<style lang="css" scoped>
.sign-up {
  width: 100%;
  height: calc(100vh - 71px);
  background-image: url("../assets/10.gif");
  background-size: cover;
}
.jumbotron {
  background-color: #000000ad;
  margin: 0;
  padding: 27px;
}

.display-4 {
  color: white;
  font-size: 3rem;
}

p.lead {
  font-size: 1.3rem;
  color: white;
}

p {
  color: grey;
  font-size: 1rem;
  margin: 0;
}

h2 {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
}
form {
  padding: 0px 140px 0px 140px;
}
div.form-row {
  height: 130px;
}

label {
  color: white;
}

.invalid label {
  color: red;
}

.invalid input {
  background-color: rgba(255, 0, 0, 0.24);
  border: 2px solid #ff0000b0;
  color: white;
}
</style>
