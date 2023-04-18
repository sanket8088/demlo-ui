import axios from "axios";
import { getAuthFromStorage } from "./auth";


const { token } = getAuthFromStorage();
const fetchQueries= (query?: any) =>
axios
  .get(`http://66.94.102.196:9001/v1/api/${query}`,{
    headers:{Authorization:`Bearer ${token}`}
  })
  .then(({ data }) => data);

const postQueries = (id:string) =>{
fetch("http://66.94.102.196:9001/v1/api/user/signup", {
  method: "POST",
}).then((res) => res.json()),
{ retry: 3 }}


export {fetchQueries,postQueries}