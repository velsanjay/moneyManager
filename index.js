const express = require("express")
const App = require("./App")
const PORT = 7000
const Manager = express()

Manager.use('/',App)


Manager.listen(PORT, "localhost", ()=>{
    console.log(`app listen ${PORT}`);
})