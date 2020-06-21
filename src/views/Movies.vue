<template>
  <div class="movies">
    <h1>Watch the available movies</h1>
    <form class="form-inline my-2 my-lg-0 justify-content-center">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search a movie"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
    <section class="cards-container">
      <div v-for="movie in movies" :key="movie.title" class="card">
        <img :src="movie.poster_path" class="card-img-top" alt="movie" />
        <div class="card-body">
          <router-link
            class="btn btn-secondary"
            :to="{ name: 'Movie', params: { id: movie.id } }"
            >{{ movie.title }}
          </router-link>
        </div>
      </div>
    </section>
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
  data() {
    return {
      movies: [],
    };
  },

  methods: {
    getUltimateMovies() {
      const URL = `${this.apiBaseURL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${this.apiConfig}`;
      fetch(URL)
        .then((response) => response.json())
        .then(({ results }) => {
          this.movies = results.map((m) => {
            m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
            return m;
          });
        });
    },
  },
  mounted() {
    this.getUltimateMovies();
  },
};
</script>

<style lang="css" scoped>
.movies {
  width: 100%;
  height: calc(100vh - 71px);
  background-image: url("../assets/10.gif");
  background-size: cover;
}

h1 {
  color: white;
  font-size: 2.5rem;
  padding-top: 4px;
}

form {
  padding: 1rem;
}

input.form-control.mr-sm-2 {
  width: 267px;
  color: white;
  background-color: black;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 86%;
  height: 69%;
  margin-left: auto;
  margin-right: auto;
}

.card {
  width: 8%;
  height: 10%;
  margin: 10px;
}

div.card-body {
  margin: 0;
  padding: 0;
}

.btn-secondary {
  font-size: 0.7rem;
  width: 93px;
  background-color: #000000c7;
  padding: 5px;
  border: 0;
}

.btn-secondary:hover {
  color: rgb(255, 0, 0);
  background-color: #00000000;
}
</style>
