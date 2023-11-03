import express from 'express'
import connectDB from './config/dbConfig.js'

const PORT = process.env.PORT || 8000
const app = express()

// menerima data dari json maupun form-data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// panggil koneksi db
connectDB();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to VueStore Server"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT} !`)
})