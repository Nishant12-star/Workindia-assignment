const jwt = require("jsonwebtoken")

// const token = jwt.sign({id:"anurag@123"},"mykey")
// console.log(token)

const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFlNzBmZjk5NWQ3OTE3ZjRmMjY2ODgiLCJpYXQiOjE1OTU4MzA4ODZ9.GgfoGxDJHv6hWzt9WVONv-ll01G3REgTDmDTYOvy2ZU","thesecretkey")
console.log(decoded)