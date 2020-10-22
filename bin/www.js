const app = require("../app");
const db = require("../Models");
const PORT = process.env.PORT || 3000;

db.dbConnect();
app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON THE PORT " + PORT);
})