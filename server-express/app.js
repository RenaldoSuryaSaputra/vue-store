import express from 'express'
import connectDB from './config/dbConfig.js'
import productRoutes from './routes/productRoute.js'
import orderRoutes from './routes/orderRoute.js'
import cors from 'cors'
import path from 'path'

const PORT = process.env.PORT || 8000
const app = express()

// enable cors
app.use(cors())

// menerima data dari json maupun form-data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Mimic "__dirname" in ES Module nodeJS
const __dirname = path.resolve();
app.use("/img", express.static(path.join(__dirname, './public/img')));

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