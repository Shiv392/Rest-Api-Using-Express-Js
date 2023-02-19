const express=require('express');
const router=express.Router();
//importing uuid npm to give all data specific id
const {v4:uuid}=require('uuid');
//all routes here are starting with /user so 
//we just need to specifiy its path

let  users=[
    {
        "firstname":"shiv",
        "lastname":"soni",
        "age":23
    },{
        firstname:'dhiraj',
        lastname:'soni',
        age:45
    }
]

module.exports=router.get('/',(req,res)=>{
    res.send(users)   //get and send all users
   res.send('this is /users')
})

module.exports=router.post('/',(req,res)=>{
    console.log('post route reached');
   console.log(req.body);
    //req.body gives the post content
    //pushing this post content to array
    const user=req.body;
    const userwithid={
        ...user,Id:uuid()    //uuid() returns uniqiue id
    }
    users.push(userwithid);   
    res.send(`user with username ${req.body.firstname} has been created`)
})
// module.exports={router}
module.exports=router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const finduser=users.find((user)=>user.Id==id||user.firstname==id||user.age==id)
   res.send(finduser)
})

//deleting specifieng id recode from the database
module.exports=router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.Id!=id);
   res.send(`user with id ${id} has been deleted`);
   console.log(users);
})
//updating value
module.exports=router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    //update firstname,lastname,age
    const {firstname,lastname,age}=req.body;
    const user=users.find((user)=>user.Id==id); 
   if(firstname){
    user.firstname=firstname;
   }
  if(lastname){
    user.lastname=lastname;
  }
  if(age){
    user.age=age;
  }
  res.send(`user with id ${id} has been updated`);
})