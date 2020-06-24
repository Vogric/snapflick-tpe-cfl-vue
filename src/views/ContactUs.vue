<template>
  <div class="ContactUs">
    <div class="container">
      <div class="card">
        <h1 v-CustomDirectiveForH1 class="text-center">Register</h1>
        <h2>
          Send us a comment about what you think of your
          <span class="brand">{{ brand | ChangeToUppercase }}</span>
          experience.
        </h2>
        <p>
          Your opinion is very important for us to continue growing and we can
          provide a better service!
        </p>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label>First name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="$v.firstName.$model"
                  :class="{
                    'is-invalid': $v.firstName.$error,
                    'is-valid': !$v.firstName.$invalid,
                  }"
                />
                <div class="valid-feedback">Your first name is valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.firstName.required"
                    >First name is required.</span
                  >
                  <span v-if="!$v.firstName.minLength"
                    >First name must have at least
                    {{ $v.firstName.$params.minLength.min }} letters.
                  </span>
                  <span v-if="!$v.firstName.maxLength"
                    >First name must have at most
                    {{ $v.firstName.$params.maxLength.min }} letters.
                  </span>
                </div>
              </div>
              <div class="form-group col-md-4">
                <label>Last name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="$v.lastName.$model"
                  :class="{
                    'is-invalid': $v.lastName.$error,
                    'is-valid': !$v.lastName.$invalid,
                  }"
                />
                <div class="valid-feedback">Your last name is valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.lastName.required"
                    >Last name is required.</span
                  >
                  <span v-if="!$v.lastName.minLength"
                    >Last name must have at least
                    {{ $v.lastName.$params.minLength.min }} letters.
                  </span>
                  <span v-if="!$v.lastName.maxLength"
                    >Last name must have at most
                    {{ $v.lastName.$params.maxLength.min }} letters.
                  </span>
                </div>
              </div>
              <div class="form-group col-md-4">
                <label>Age</label>
                <input
                  type="number"
                  class="form-control"
                  v-model.number.lazy="$v.age.$model"
                  :class="{
                    'is-invalid': $v.age.$error,
                    'is-valid': !$v.age.$invalid,
                  }"
                />
                <div class="valid-feedback">Your age is valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.age.between"
                    >Must be between {{ $v.age.$params.between.min }} and
                    {{ $v.age.$params.between.max }}
                  </span>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label>Mail</label>
                <input
                  type="email"
                  class="form-control"
                  v-model.trim="$v.email.$model"
                  :class="{
                    'is-invalid': $v.email.$error,
                    'is-valid': !$v.email.$invalid,
                  }"
                />
                <div class="valid-feedback">Your email is valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.email.required">Email is required.</span>
                  <span v-if="!$v.email.isUnique">Write a valid email.</span>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label>Phone number</label>
                <input
                  type="numeric"
                  class="form-control"
                  placeholder="Write your country code, city and phone number"
                  v-model.number="$v.phoneNumber.$model"
                  :class="{
                    'is-invalid': $v.phoneNumber.$error,
                    'is-valid': !$v.phoneNumber.$invalid,
                  }"
                />
                <div class="valid-feedback">Your phone number is valid!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.phoneNumber.required"
                    >Phone number is required.</span
                  >
                  <span v-if="!$v.phoneNumber.numeric">
                    This field only accepts numbers.</span
                  >
                </div>
              </div>
              <div class="form-group col-md-12">
                <label>Send us a message</label>
                <textarea
                  class="form-control"
                  v-model.trim="$v.textArea.$model"
                  :class="{
                    'is-invalid': $v.textArea.$error,
                    'is-valid': !$v.textArea.$invalid,
                  }"
                  placeholder="Write your message here"
                ></textarea>
                <div class="valid-feedback">Thanks for your message!</div>
              </div>
              <button type="submit" class="btn btn-success col-md-12">
                Submit {{ submitStatus }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <p class="copyright">
      © 2020 {{ brand | ChangeToUppercase }} - TPE Desarrollo de Interfaces
      Graficas - Braian Vogrič
    </p>
  </div>
</template>

<script>
import {
  required,
  between,
  minLength,
  maxLength,
  email,
  numeric,
} from "vuelidate/lib/validators";
export default {
  name: "ContactUs",
  props: {
    msg: String,
  },
  data() {
    return {
      brand: "SnapFlick",
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phoneNumber: "",
      textArea: "",
      submitStatus: null,
    };
  },

  validations: {
    firstName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(15),
    },
    lastName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(18),
    },
    age: {
      required,
      between: between(18, 100),
    },
    email: {
      required,
      email,
    },

    phoneNumber: {
      required,
      numeric,
      minLength: minLength(12),
      maxLength: maxLength(12),
    },
    textArea: {
      required,
    },
  },
  methods: {
    submitForm() {
      console.log("The user entered the following data:");
      console.log(
        "First name: " + this.firstName,
        "Last name: " + this.lastName,
        "Age: " + this.age,
        "Mail: " + this.email,
        "Phone number: " + this.phoneNumber,
        "Message: " + this.textArea
      );
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "Error";
      } else {
        // do your submit logic here
        this.submitStatus = "Pending";
        setTimeout(() => {
          this.submitStatus = "Ok";
        }, 500);
      }
    },
  },
  filters: {
    ChangeToUppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style lang="css" scoped>
.ContactUs {
  width: 100%;
  height: calc(100vh - 71px);
  background-image: url("../assets/10.gif");
  background-size: cover;
}

h2,
p {
  color: #c0c0c0;
}

h2 {
  font-size: 1.4rem;
}

.brand {
  color: rgb(155, 10, 10);
}

div.card {
  background-color: #0000;
}

.card-body {
  padding: 2.5rem 10rem 0rem 10rem;
}

label {
  color: white;
}

input.form-control {
  height: 2rem;
}

input,
textarea {
  background-color: #ffffffb5;
}

.is-invalid {
  background-color: rgba(255, 0, 0, 0.24);
  border: 2px solid #ff0000b0;
  color: white;
}

.copyright {
  margin: 0;
  padding-top: 10px;
  font-size: 13px;
}
</style>
