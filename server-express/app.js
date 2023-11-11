import express from 'express'
import connectDB from './config/dbConfig.js'
import productRoutes from './routes/productRoute.js'
import orderRoutes from './routes/orderRoute.js'
import path from 'path'

const PORT = process.env.PORT || 8000
const app = express()

// menerima data dari json maupun form-data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// path for image '/img' nama link di db './public/img' dir name
app.use('/img', express.static('./public/img'))

// panggil koneksi db
connectDB();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to VueStore Server"
    })
})

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT} !`)
})