const APIKEY = "";
const BASEURL = "https://api.themoviedb.org/3/";
export const Mixins = {
  data() {
    return {
      apiConfig: `api_key=${APIKEY}`,
      apiBaseURL: BASEURL,
    };
  },
  filters: {
    coverURL(str) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`;
    },
  },
};
