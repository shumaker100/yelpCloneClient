import axios from "axios";

export default axios.create({
  baseURL: "https://serene-temple-58307.herokuapp.com/api/v1/restaurants",
});
