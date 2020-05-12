export default {
  name:"wrap",
  // baseUrl:"http://localhost:4000",
  api:{
      getPosition:{
          url:"/position/40.10038,116.36867",
          method:"get",
          corsUrl:"/4000"
      },
      getCategories:{
          url:"/index_category",
          method:"get",
          corsUrl:"/4000"
      },
      getShops:{
          url:"/shops?latitude=40.10038&longitude=116.36867",
          method:"get",
          corsUrl:"/4000"
      },
      getCode:{
          url:"/sendcode",
          method:"get",
          corsUrl:"/4000"
      }

  }
}
