const APIKEY = "0b536ecc2fc4b0028b1a20813de48533";
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
