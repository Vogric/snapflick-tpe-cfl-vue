<template>
  <div class="home">
    <h1>HOME COMPONENT</h1>
    <h2>Subtitulo info</h2>
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
  background-image: url("../assets/backgroundCover.gif");
  background-size: cover;
}
h1 {
  color: white;
  text-shadow: #741ccc 1px 1px;
  font-size: 4rem;
  padding-top: 4rem;
  font-weight: bold;
}
h2 {
  color: white;
}
</style>
