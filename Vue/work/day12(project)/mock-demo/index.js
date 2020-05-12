var Mock = require('mockjs')
var data = Mock.mock({
    email:'@email',
    name:"@name",
    "age|0-180":1
})
console.log(data);