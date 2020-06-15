<template>
  <div class="home">
    <div class="header">
      <h1>Nombre App</h1>
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        accusantium?
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
  width: 50rem;
  padding-top: 5rem;
  color: white;
  text-shadow: #000000 3px 3px;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
}
</style>
