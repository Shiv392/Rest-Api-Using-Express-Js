import  {v4 as uuid} from 'uuid';
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

export const getAllUser=(req,res)=>{
    res.send(users)   //get and send all users
   res.send('this is /users')
}

export const getuserbyid=(req,res)=>{
    const {id}=req.params;
    const finduser=users.find((user)=>user.Id==id||user.firstname==id||user.age==id)
   res.send(finduser)
}

export const createUser=(req,res)=>{
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
}

export const deleteuser=(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.Id!=id);
   res.send(`user with id ${id} has been deleted`);
   console.log(users);
}

export const updateuser=(req,res)=>{
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
}