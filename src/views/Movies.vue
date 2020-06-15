<template>
  <div class="movies">
    <h1>Watch the available movies</h1>
    <form class="form-inline my-2 my-lg-0 justify-content-center">
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
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Previous</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Movies",
};
</script>

<style lang="css" scoped>
.movies {
  width: 100%;
  height: calc(100vh - 57.81px);
  background-image: url("../assets/10.gif");
  background-size: cover;
}

h1 {
  color: white;
  text-shadow: #741ccc 1px 1px;
  font-size: 3.5rem;
  padding-top: 4rem;
  font-weight: bold;
}

form {
  padding-top: 2rem;
}
</style>
