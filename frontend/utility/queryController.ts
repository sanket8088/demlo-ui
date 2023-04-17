

const fetchQueries =  () =>
fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  (res) => res.json()
)


const postQueries = () =>{
fetch("http://66.94.102.196:9001/v1/api/user/signup", {
  method: "POST",
}).then((res) => res.json()),
{ retry: 3 }}


export {fetchQueries,postQueries}