<template>
  <div class="movies">
    <h1>Movies Component</h1>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2, bg-dark"
        type="search"
        placeholder="Search a movie"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Movies",
};
</script>
