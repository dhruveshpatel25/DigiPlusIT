const mongoose= require('mongoose');
const URI=process.env.URI

mongoose.connect(URI)
.then(()=>{
    console.log('DataBase is connected');
}).catch((err)=>{
    console.log(err);
})