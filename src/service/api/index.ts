import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const Data = {
  async get(param: string) {
    return api.get(`/api.php?amount=${param}`).then((res) => res.data);
  },
};

export default Data;
