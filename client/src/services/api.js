import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-job-application-tracker.onrender.com/api",
});

export default API;