<template>
  <div class="home">
    <div class="header">
      <h1>Find your favorite movies</h1>
      <h2>
        Watch all the movies you want and find them in a snap!
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="css" scoped>
.home {
  width: 100%;
  height: calc(100vh - 57.81px);
  background-image: url("../assets/8.gif");
  background-size: cover;
}
.header {
  width: 37rem;
  padding-top: 5rem;
  padding-left: 2rem;
  color: white;
  text-shadow: #000000 3px 3px;
  text-align: initial;
}

h1 {
  font-size: 4.5rem;
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
  width: 31rem;
}
</style>
