const express = require('express')
const dotenv = require("dotenv")
const mongoose= require("mongoose")
const app = express()
const productRouter = require('./routes/products')
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');
const cartRouter = require('./routes/cart');
const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log("db connected")).catch((err) => console.log(err))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', productRouter);
app.use('/api/', authRouter);
app.use('/api/orders', orderRouter);
app.use('/api/users', userRouter);
app.use('/api/cart', cartRouter); // carts

app.listen(process.env.PORT || port, () => console.log(`Ecommerce app listening on port ${process.env.PORT}!`))