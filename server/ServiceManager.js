const MeliService = require("./MercadolibreService")
const userRouting = require("./src/routes/userRoutes")
const express = require('express');
const app = express()
const port = 5000

const mock = new MeliService()
app.use("/", userRouting, (req, res) => { res.status(200).send('<h1>Hola!</h1>')})

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`)
})