<template>
  <div class="movie">
    <div v-if="Object.keys(movie).length">
      <div class="Movie text-white py-5"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-4 col-lg-3">
            <img :src="movie.poster_path" />
          </div>
          <div class="col-12 col-md-8 col-lg9">
            <h2>Details: {{ movie.title }}</h2>
            <p v-text="movie.overview"></p>
            <ul>
              <li>Overview: {{ movie.overview }}</li>
              <li>Genre: {{ movie.genre_ids }}</li>
              <li>Release date: {{ movie.release_date }}</li>
              <li>Original language: {{ movie.original_language }}</li>
              <li>Popularity: {{ movie.popularity }}</li>
              <li>Vote average: {{ movie.vote_average }}</li>
              <li>Vote count: {{ movie.vote_count }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
    this.fetchMovie();
  },
  watch: {
    $route(to) {
      const currentId = to.params.id;
      this.fetchMovie(currentId);
    },
  },
  methods: {
    fetchMovie() {
      fetch(
        `${this.apiBaseURL}movie/${this.$route.params.id}?${this.apiConfig}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.movie = data;
          console.log(data);
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
