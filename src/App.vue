<template>
  <div id="app" class="app">
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/">
        <img
          src="./assets/snapflick.png"
          width="120"
          height="45"
          alt
          loading="lazy"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li>
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/movies">Movies</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/sign-up">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.navbar {
  background-color: #000000;
  color: white;
}

.navbar a {
  color: white;
  font-size: 1.2rem;
}

.navbar a:hover {
  color: rgb(255, 0, 0);
}

#nav a.router-link-exact-active {
  color: rgb(0, 255, 136);
}
</style>
