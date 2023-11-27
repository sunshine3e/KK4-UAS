const express = require('express')
const app = express()
const port = 4000
const connectDB = require ('./config/db')
const siswarouter = require('./router/siswa')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(siswarouter)
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

