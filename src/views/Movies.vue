<template>
  <div class="movies">
    <h1 v-CustomDirectiveForH1>Watch the available movies</h1>
    <form
      @submit.prevent="search"
      class="form-inline my-2 my-lg-0 justify-content-center"
    >
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search a movie"
        aria-label="Search"
        v-model="query"
      />
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
        <li class="page-item">
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

  mounted() {
    this.$store.dispatch("getUltimateMovies");
  },

  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  data() {
    return { query: "" };
  },
  methods: {
    search() {
      this.$store.dispatch("searchBar", this.query);
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

form {
  padding: 1rem;
}

input.form-control.mr-sm-2 {
  text-align: center;
  width: 50rem;
  color: white;
  background-color: black;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  width: 77%;
  height: 69%;
  margin-left: auto;
  margin-right: auto;
}

.card {
  width: 8%;
  height: 31%;
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
  padding: 14px 12px 0px 0px;
  border: 0;
}

.btn-secondary:hover {
  color: rgb(255, 0, 0);
  background-color: #00000000;
}

.pagination {
  margin: 0;
}

a.page-link {
  background-color: rgba(98, 98, 98, 0.24);
  color: white;
}
</style>
