import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f38124819814322893f911d48016d15",
  },
});
