<template>
  <div class="SignUp">
    <div class="card">
      <h3 class="header text-center">Register</h3>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>First name</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.firstName.$model"
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
            <div class="form-group col-md-6">
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
                <span v-if="!$v.lastName.required">Last name is required.</span>
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
            <div class="form-group col-md-6">
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
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="$v.userName.$model"
                :class="{
                  'is-invalid': $v.userName.$error,
                  'is-valid': !$v.userName.$invalid,
                }"
              />
              <div class="valid-feedback">Your userName is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.userName.required">Username is required.</span>
                <span v-if="!$v.userName.isUnique"
                  >This username is already registered.</span
                >
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
                <span v-if="!$v.email.isUnique"
                  >This email is already registered.</span
                >
              </div>
            </div>
            <div class="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model.trim="$v.password.$model"
                :class="{
                  'is-invalid': $v.password.$error,
                  'is-valid': !$v.password.$invalid,
                }"
              />
              <div class="valid-feedback">Your password is valid!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.password.required">Password is required.</span>
                <span v-if="!$v.password.minLength">
                  {{ $v.password.$params.minLength.min }} characters
                  minimum</span
                >
              </div>
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                id="showPassword"
                class="form-check-input"
                @click="toggleShowPassword"
                v-model="showPassword"
              />
              <label class="form-check-label" for="showPassword"
                >Show Password</label
              >
            </div>
            <div class="form-group">
              <label>Repeat the password</label>
              <input
                type="password"
                class="form-control"
                v-model.trim="$v.repeatPassword.$model"
                :class="{
                  'is-invalid': $v.repeatPassword.$error,
                  'is-valid': password != '' ? !v.repeatPassword.$invalid : '',
                }"
              />
              <div class="valid-feedback">Your password is identical!</div>
              <div class="invalid-feedback">
                <span v-if="!$v.repeatPassword.sameAsPassword"
                  >Password must be identical.</span
                >
              </div>
            </div>
            <div class="form-group">
              <label>Phone number</label>
              <input
                type="numeric"
                class="form-control"
                v-model.number.lazy="$v.phoneNumber.$model"
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
                <span v-if="!$v.phoneNumber.numeric"
                  >This phone number only numeric accepted.</span
                >
              </div>
            </div>
            <button type="submit" class="btn btn-success">
              Submit {{ subtmitStatus }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  between,
  minLength,
  maxLength,
  email,
  sameAs,
  numeric,
} from "vuelidate/lib/validators";
export default {
  name: "SignUp",

  data() {
    return {
      firstName: "",
      lastName: "",
      age: "0",
      userName: "",
      email: "",
      password: false,
      repeatPassword: "",
      showPassword: "",
      phoneNumber: "",
      textArea: "",
      subtmitStatus: null,
    };
  },

  validations: {
    firstName: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(15),
    },
    lastName: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(18),
    },
    age: {
      required,
      between: between(18, 100),
    },
    userName: {
      required,
      isUnique(value) {
        if (value === "") return true;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(typeof value === "string" && value.length % 2 !== 0);
          }, 350 + Math.random() * 300);
        });
      },
    },
    email: {
      required,
      email,
      isUnique(value) {
        if (value === "") return true;

        const emailRegex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(emailRegex.test(value));
          }, 350 + Math.random() * 300);
        });
      },
    },
    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
    phoneNumber: {
      required,
      numeric,
      minLength: minLength(12),
    },
    textArea: {
      required,
    },
  },
  methods: {
    toggleShowPassword() {
      let show = document.querySelector("password");
      if (this.showPassword == false) {
        this.showPassword = true;
        show.type = "text";
      } else {
        this.showPassword = false;
        show.type = "password";
      }
    },
  },
  subtmitForm() {
    this.$v.$touch();
    if (this.$v.$invalid) {
      this.subtmitStatus = "fail";
    } else {
      this.subtmitStatus = "success";
    }
  },
};
</script>

<style lang="css" scoped>
.SignUp {
  width: 100%;
  height: calc(100vh - 71px);
  background-image: url("../assets/10.gif");
  background-size: cover;
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

h1 {
  color: white;
  font-size: 2rem;
  padding: 1rem;
}

label {
  color: white;
}

.invalid label {
  color: red;
}

input,
textarea {
  background-color: #ffffffb5;
}

.invalid input {
  background-color: rgba(255, 0, 0, 0.24);
  border: 2px solid #ff0000b0;
  color: white;
}
</style>
