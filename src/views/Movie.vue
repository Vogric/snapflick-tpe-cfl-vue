<template>
  <div class="movie">
    <h1>Movie information</h1>
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
    <section class="cards-container">
      <div v-for="movie in movies" :key="movie.title" class="card">
        <h1>{{ movie.title }}</h1>
        <ul>
          <li>{{ movie.overview }}</li>
          <li>{{ movie.genre_ids }}</li>
          <li>{{ movie.release_date }}</li>
          <li>{{ movie.original_language }}</li>
          <li>{{ movie.popularity }}</li>
          <li>{{ movie.vote_average }}</li>
          <li>{{ movie.vote_count }}</li>
        </ul>
        <img :src="movie.poster_path" class="card-img-top" :alt="movie.title" />
        <div class="card-body">
          <a href="#" class="btn btn-secondary">More details</a>
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
  name: "Movie",
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    const currentId = this.$route.params.id;
    this.fetchMovie(currentId);
  },
  watch: {
    $route(to) {
      const currentId = to.params.id;
      this.fetchMovie(currentId);
    },
  },
  methods: {
    fetchMovie(id) {
      const APIKEY = "0b536ecc2fc4b0028b1a20813de48533";
      const BASEURL = "https://api.themoviedb.org/3/";
      const URL = `${BASEURL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${APIKEY}`;
      fetch(URL + id)
        .then((response) => response.json())
        .then((data) => {
          this.movie = data.results.map((m) => {
            m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
            return m;
          });
        });
    },
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
  font-weight: bold;
}

form {
  padding-top: 2rem;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 68%;
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
  font-size: 12px;
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
