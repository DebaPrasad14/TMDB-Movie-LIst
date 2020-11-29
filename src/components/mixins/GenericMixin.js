import MovieItemCard from "./../MovieItemCard";
import PageLayout from "./../common/PageLayout";
import { getGenreId } from "@/utils/helper";

export default {
  components: {
    MovieItemCard,
    PageLayout,
  },
  data() {
    return {
      pageStatus: "loading",
      BASE_URL: process.env.VUE_APP_TMDB_URL,
      API_KEY: process.env.VUE_APP_API_KEY,
      movieList: [],
    };
  },
  created() {
    this.getLatestMovies();
  },
  methods: {
    getGenreForActionMovies: getGenreId,
  },
};
