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
        <div class="col-md-6 mb-3">
          <label for="validationServer01">First name</label>
          <input
            type="text"
            class="form-control"
            id="validationServer01"
            value=""
            placeholder=""
            required
          />
          <div class="valid-feedback">
            <!-- Looks good!
            class="form-control is-valid" -->
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationServer02">Last name</label>
          <input
            type="text"
            class="form-control"
            id="validationServer02"
            value=""
            required
          />
          <div class="valid-feedback">
            <!-- Looks good!
            class="form-control is-valid" -->
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationServer03">City</label>
          <input
            type="text"
            class="form-control"
            id="validationServer03"
            required
          />
          <div class="invalid-feedback">
            <!-- class="form-control is-invalid"
              Please provide a valid city. -->
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationServer04">State</label>
          <select class="custom-select" id="validationServer04" required>
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
          <div class="invalid-feedback">
            <!-- Please select a valid state. -->
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationServer05">Zip</label>
          <input
            type="text"
            class="form-control"
            id="validationServer05"
            required
          />
          <div class="invalid-feedback">
            <!-- Please provide a valid zip
           class="form-control is-invalid" ". -->
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck3"
            required
          />
          <label class="form-check-label" for="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Sign up now</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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
