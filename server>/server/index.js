const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('uploads'));

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongo Conneced !"))
.catch((err) => console.error('Error while connecting ', err))


const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/auth',authRoutes);
app.use('/posts',postRoutes);
app.use('/profile',userProfileRoutes);
app.use('/comment',commentRoutes);

app.listen(3001,() => {
    console.log('running on port 3001');
});