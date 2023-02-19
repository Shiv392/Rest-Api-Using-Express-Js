const express=require('express');
const bodyparser=require('body-parser');
const userroute=require('./Routes/users.js');
const app=express();
const PORT=8000;

app.use(bodyparser.json())
//common users routes
app.use('/users',userroute)   

app.get('/',(req,res)=>{
    res.send('this is basic route');
})

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})