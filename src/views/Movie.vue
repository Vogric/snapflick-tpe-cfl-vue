<template>
  <div class="movie">
    <div v-if="Object.keys(movie).length">
      <div
        class="movieDetail text-white py-5"
        :style="{
          background:
            'linear-gradient(rgba(48, 236, 0, 0.43),rgba(0, 0, 0, 0.32),rgba(255, 0, 0, 0.42)),url(https://image.tmdb.org/t/p/w1400_and_h450_face' +
            movie.backdrop_path +
            ')',
          'background-size': 'cover',
        }"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-4 col-lg-3">
              <img :src="movie.poster_path | coverURL" class="w-100" />
            </div>
            <div class="col-12 col-md-8 col-lg9">
              <h2>{{ movie.title }}</h2>
              <ul>
                <li>{{ movie.overview }}</li>
                <li>Category: {{ movie.genre_ids }}</li>
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
    </div>
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
        });
    },
  },
};
</script>

<style lang="css" scoped>
.movie {
  width: 100%;
  height: calc(100vh - 71px);
  background-color: black;
}

.movieDetail {
  padding-top: 2rem;
  height: 81vh;
}

div.row {
  padding-top: 2rem;
}

h2 {
  font-size: 80px;
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

ul {
  list-style: none;
}

li {
  font-size: 18px;
}
</style>
