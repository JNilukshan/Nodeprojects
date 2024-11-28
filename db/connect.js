const mongoose = require('mongoose');


const connectDB =(url) =>{
    return mongoose.connect(url).then(()=>console.log('CONNECTED TO THE DATABASE...'))
    .catch((err)=>console.log(err));
}

module.exports = connectDB;




