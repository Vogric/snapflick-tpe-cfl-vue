const APIKEY = "0b536ecc2fc4b0028b1a20813de48533";
const BASEURL = "https://api.themoviedb.org/3/";
//const URL = `${BASEURL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${APIKEY}`;
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
