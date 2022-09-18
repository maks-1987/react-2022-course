import axios from "axios";
import { ENDPOINTS } from "../Endpoints/path";

export default axios.create({
  baseURL: ENDPOINTS.TYPICODE_Serv,
});