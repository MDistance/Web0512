export default {
  api:{
    getUser:{
      url:"/search/users",
      method:"get",
      data:{q:"damu"}
    },
    getRep:{
      url:"/search/repositories",
      method:"get",
      data:{q:"vue"}
    }
  },
  baseUrl:"https://api.github.com",
  timeout:8000,
  name:"user"
}
